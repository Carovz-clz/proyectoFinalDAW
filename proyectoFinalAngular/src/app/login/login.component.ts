import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginService } from '../servicios/login.service';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesionIniciada: Observable<boolean>;
  sesion: boolean = false;  
  formulario: FormGroup;

  constructor(private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.email])
    });

    this.sesionIniciada = this.loginService.getSesionIniciada();
    this.sesionIniciada.subscribe(sesion => this.sesion = sesion);
  }

  iniciarSesion(){
    console.log('Sesión inciada');
    this.loginService.cambiarValorSesion(true);
  }

}
