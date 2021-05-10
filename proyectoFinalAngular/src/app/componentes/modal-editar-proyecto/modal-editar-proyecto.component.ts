import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

interface Proyecto {
  idProyecto: number,
  nombreProyecto: string,
  descripcion: string,
  tareas: [],
  usuario: string,
  fecha: string
}

interface Tarea {
  descripcion: string,
  idtarea: number,
  realizada: number
}

@Component({
  selector: 'app-modal-editar-proyecto',
  templateUrl: './modal-editar-proyecto.component.html',
  styleUrls: ['./modal-editar-proyecto.component.css']
})
export class ModalEditarProyectoComponent implements OnInit {

  @ViewChild('contenido', { static: false }) contenidoModal: NgbModalRef;
  @Input() proyecto: Proyecto;
  @Output() pararEditar = new EventEmitter<void>();
  @Output() proyectoEditado = new EventEmitter<any>();
  modalRef: NgbModalRef;
  formulario: FormGroup;
  cargando = false;

  constructor(private modal: NgbModal, private router: Router, private ruta: ActivatedRoute, private loginService: LoginService, private peticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.inicializarFormulario();

  }

  ngAfterViewInit() {
    this.abrirModal();
  }

  inicializarFormulario() {
    let tareasForm = new FormArray([]);
    let aTareas: Tarea[] = this.proyecto.tareas;

    for (let tarea of aTareas) {
      tareasForm.push(new FormControl(tarea.descripcion, Validators.required));
      console.log(tarea);
    }

    this.formulario = new FormGroup({
      'nombreProyecto': new FormControl(this.proyecto.nombreProyecto, Validators.required),
      'descripcion': new FormControl(this.proyecto.descripcion, Validators.required),
      'tareas': tareasForm
    });
  }

  get tareas() {
    return (<FormArray>this.formulario.get("tareas")).controls;
  }

  anadirNuevaTarea() {
    (<FormArray>this.formulario.get("tareas")).push(new FormControl('', Validators.required));
  }

  guardarCambiosProyecto() {
    let nuevoProyecto = {
      idproyecto: this.proyecto.idProyecto,
      nombreProyecto: this.formulario.value['nombreProyecto'],
      descripcion: this.formulario.value['descripcion'],
      tareas: this.formulario.value['tareas'],
      usuario: this.loginService.getUsuario(),
      fecha: this.proyecto.fecha
    };

    console.log(nuevoProyecto);

    this.peticionesService.editarDatosProyecto(nuevoProyecto)
      .subscribe(response => {
        this.proyectoEditado.emit(nuevoProyecto);
        this.modalRef.close();
        this.pararEditar.emit();
      });
  }

 

  cancelar() {
    this.modalRef.close();
    this.pararEditar.emit();
  }

  borrarTarea(i) {
    (<FormArray>this.formulario.get("tareas")).removeAt(i);
  }

  volverAInicio() {
    this.cargando = true;
    setTimeout(() => {
      this.modalRef.close();
      this.pararEditar.emit();
      this.cargando = true;
      this.router.navigate(['inicio']);
    }, 2000);
  }

  abrirModal() {
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }




}
