import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private peticionesService: PeticionesService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });

    this.sesionIniciada = this.loginService.getSesionIniciada();
    this.sesionIniciada.subscribe(sesion => this.sesion = sesion);
  }

  iniciarSesion(){
    this.loginService.guardarUsuarioLogeado(this.formulario.get('nombreUsuario').value);
    this.loginService.cambiarValorSesion(true);
    this.router.navigate(['inicio']);
  }

}
