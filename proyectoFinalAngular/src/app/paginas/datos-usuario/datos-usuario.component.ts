import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {
  usuario = {
    username: '',
    nombre: '',
    apellidos: '',
    email: '',
    pass: '',
    enabled: 0,
    visible: 0

  };
  @ViewChild('contenido', { static: false }) contenidoModal: NgbModalRef;
  modalRef: NgbModalRef;
  formulario: FormGroup;
  modoEditar:boolean = false;
  existeUsuario: boolean = false;
  altaCorrecta: boolean = false;

  constructor(private peticionesService: PeticionesService, private loginService: LoginService, private router: Router, private ruta: ActivatedRoute, private modal: NgbModal) { }

  ngOnInit(): void {
    this.peticionesService.obtenerDatosUsuario(this.loginService.getUsuario())
      .subscribe(response => {
        this.usuario = response;
        this.usuario.visible == 1 ? 1 : null; 
      });

    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'nombre': new FormControl(null),
      'apellidos': new FormControl(null),
      'visible': new FormControl(null)
    });
  }


  habilitarEdicion() {
    this.modoEditar = true;
    this.asignarValoresFormulario();
    this.formulario.valid;
  }

  deshabilitarEdicion(){
    this.modoEditar = false;
    this.asignarValoresFormulario();
    
  }

  abrirModal() {
    this.modalRef = this.modal.open(this.contenidoModal, { size: 'md', centered: true });
  }
  
  guardarNuevosDatosUsuario() {
    let visibilidad = this.usuario.visible;

    this.usuario = {
      username: this.formulario.get('nombreUsuario').value,
      pass: this.formulario.get('password').value,
      nombre: this.formulario.get('nombre').value,
      apellidos: this.formulario.get('apellidos').value,
      email: this.formulario.get('correo').value,
      visible: visibilidad,
      enabled: 1
    }

    this.peticionesService.editarDatosUsuario(this.usuario)
      .subscribe( () => {
        this.abrirModal();
        this.volver();
      });
  }

  cambiarValorCheckbox(){
    this.usuario.visible = (this.usuario.visible == 1) ? 0 : 1;
    
  }

  asignarValoresFormulario(){

    this.formulario.setValue(
      { 'nombreUsuario': this.usuario.username, 
        'correo': this.usuario.email,
        'password': this.usuario.pass,
        'nombre': this.usuario.nombre,
        'apellidos': this.usuario.apellidos,
        'visible': this.usuario.visible 
      });
  }

  volver() {
    setTimeout(() => {
      this.modalRef.close();
      this.modoEditar = false;
    }, 2000);
  }

}
