import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  formulario: FormGroup;
  modoEditar = false;
  existeUsuario: boolean = false;

  constructor(private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.peticionesService.obtenerDatosUsuario(this.loginService.getUsuario())
      .subscribe(response => {
        this.usuario = response;
        console.log(this.usuario);
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

  guardarNuevosDatosUsuario() {

  }

  habilitarEdicion() {
    this.modoEditar = true;

    this.formulario.setValue(
      { 'nombreUsuario': this.usuario.username, 
        'correo': this.usuario.email,
        'password': this.usuario.pass,
        'nombre': this.usuario.nombre,
        'apellidos': this.usuario.apellidos,
        'visible': this.usuario.visible 
      });

    this.formulario.valid;
  }

}
