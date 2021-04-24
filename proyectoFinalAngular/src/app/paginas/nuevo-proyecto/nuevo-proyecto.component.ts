import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from '../../shared/modelos/proyecto.model';
import { LoginService } from '../../shared/servicios/login.service';
import { PeticionesService } from '../../shared/servicios/peticiones.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {

  @ViewChild('contenido', { static: false }) contenidoModal: NgbModalRef;
  modalRef: NgbModalRef;
  formulario: FormGroup;
  nombreProyecto = '';
  

  constructor(private peticionesService: PeticionesService, private modal: NgbModal, private router: Router, private ruta: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.inicializarFormulario();

  }

  inicializarFormulario(){

    this.formulario = new FormGroup({
      'nombreProyecto': new FormControl(null, Validators.required),
      'descripcion': new FormControl(null, Validators.required),
      'tareas': new FormArray([ new FormControl('', Validators.required)])
    });
  }

  get tareas() {
    return (<FormArray>this.formulario.get("tareas")).controls;
  }

  anadirNuevaTarea(){
    (<FormArray>this.formulario.get("tareas")).push(new FormControl('', Validators.required));
  }

  guardarNuevoProyecto(){
    let nuevoProyecto = new Proyecto(
      this.formulario.value['nombreProyecto'],
      this.formulario.value['descripcion'],
      this.formulario.value['tareas'], 
      this.loginService.getUsuario()
    );

    this.peticionesService.insertarNuevoProyecto(nuevoProyecto)
      .subscribe( response => {
        this.nombreProyecto = response.nombre;
        this.abrirModal();
        this.volverAInicio();
      });
    this.volverAInicio();
  }

  cancelar(){
    this.router.navigate(['inicio']);
  }

  borrarTarea(i){
    (<FormArray>this.formulario.get("tareas")).removeAt(i);
  }

  volverAInicio() {
    setTimeout(() => {
      this.modalRef.close();
      this.router.navigate(['inicio']);
    }, 2000);
  }

  abrirModal() {
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }

}
