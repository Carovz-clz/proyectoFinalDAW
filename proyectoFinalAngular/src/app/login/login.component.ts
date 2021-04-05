import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.email])
    });

    this.peticionesService.obtenerTodosLosUsuarios();

  }

  iniciarSesion(){
    console.log('Sesión inciada');
  }

}
