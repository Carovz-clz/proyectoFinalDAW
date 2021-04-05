import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelos/usuario.model';
import { PeticionesService } from '../servicios/peticiones.service';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;
  existeUsuario: boolean = false;

  constructor(private peticionesService: PeticionesService, private router: Router, private ruta: ActivatedRoute) { }

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

  guardarNuevoUsuario() {
    let idUsuario = this.formulario.get('nombreUsuario').value;
    let visibilidad = (this.formulario.get('visible').value != null) ? 1 : 0;

    this.usuario = {
      username: idUsuario,
      pass: this.formulario.get('password').value,
      nombre: this.formulario.get('nombre').value,
      apellidos: this.formulario.get('apellidos').value,
      email: this.formulario.get('correo').value,
      visible: visibilidad,
      enabled: 1
    }

    console.log(this.usuario);
    this.peticionesService.insertarNuevoUsuario(this.usuario).subscribe( 
      response => {
        console.log('Respuesta: '+response);
        this.router.navigate(['../'], {relativeTo: this.ruta});
      },
      error => {
        this.existeUsuario = true;
      }
    );

  }

}
