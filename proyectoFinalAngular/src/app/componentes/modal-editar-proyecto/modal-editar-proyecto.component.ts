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
  tareasEliminar = [];
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
    let tareasFormId = new FormArray([]);
    let tareasFormRealizada = new FormArray([]);
    let aTareas: Tarea[] = this.proyecto.tareas;
    console.log("tareas form", this.proyecto.tareas);

    for (let tarea of aTareas) {
      tareasForm.push(new FormControl(tarea.descripcion, Validators.required));
      tareasFormId.push(new FormControl(tarea.idtarea));
      tareasFormRealizada.push(new FormControl(tarea.realizada));
      console.log(tarea);
    }

    this.formulario = new FormGroup({
      'nombreProyecto': new FormControl(this.proyecto.nombreProyecto, Validators.required),
      'descripcion': new FormControl(this.proyecto.descripcion, Validators.required),
      'tareas': tareasForm,
      'tareasid': tareasFormId,
      'realizada': tareasFormRealizada,
    });


  }

  get tareas() {
    return (<FormArray>this.formulario.get("tareas")).controls;
  }

  get tareasid() {
    return (<FormArray>this.formulario.get("tareasid")).controls;
  }

  get realizada() {
    return (<FormArray>this.formulario.get("realizada")).controls;
  }

  anadirNuevaTarea() {
    (<FormArray>this.formulario.get("tareas")).push(new FormControl('', Validators.required));
    (<FormArray>this.formulario.get("tareasid")).push(new FormControl(0));
    (<FormArray>this.formulario.get("realizada")).push(new FormControl(0));
  }

  guardarCambiosProyecto() {
    let arrayTareas = [];

    for (let index = 0; index < this.formulario.value['tareas'].length; index++) {
      arrayTareas.push(
        {
          idtarea: this.formulario.value['tareasid'][index], 
          descripcion: this.formulario.value['tareas'][index], 
          realizada: this.formulario.value['realizada'][index]});
    }

    let nuevoProyecto = {
      idproyecto: this.proyecto.idProyecto,
      nombreProyecto: this.formulario.value['nombreProyecto'],
      descripcion: this.formulario.value['descripcion'],
      tareasconid: arrayTareas,
      usuario: this.loginService.getUsuario(),
      fecha: this.proyecto.fecha
    };

    console.log("nuevo Proyecto", nuevoProyecto);

    console.log("Tareas a eliminar ", this.tareasEliminar);
    this.tareasEliminar.forEach(element => {
      this.peticionesService.eliminarTareaPorId(element)
      .subscribe();
    });

    this.peticionesService.editarDatosProyecto(nuevoProyecto)
      .subscribe(response => {
        this.proyectoEditado.emit(nuevoProyecto);
        this.modalRef.close();
        this.pararEditar.emit();
      });
  }

 

  cancelar() {
    this.tareasEliminar = [];
    this.modalRef.close();
    this.pararEditar.emit();
  }

  borrarTarea(i) {
    this.tareasEliminar.push(this.formulario.value['tareasid'][i]);
    (<FormArray>this.formulario.get("tareas")).removeAt(i);
    (<FormArray>this.formulario.get("tareasid")).removeAt(i);
    (<FormArray>this.formulario.get("realizada")).removeAt(i);
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
