import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'correo': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'nombre': new FormControl(null),
      'apellidos': new FormControl(null),
      'visible': new FormControl(null)
    });
  }

  guardarNuevoUsuario(){
    let visibilidad = (this.formulario.get('visible').value != null) ? 1 : 0;

    this.usuario = {
      nombreUsuario: this.formulario.get('nombreUsuario').value,
      correo: this.formulario.get('correo').value,
      password: this.formulario.get('password').value,
      nombre: this.formulario.get('nombre').value,
      apellidos: this.formulario.get('apellidos').value,
      visible: visibilidad,
    } 

    console.log(this.usuario);
  }

}
