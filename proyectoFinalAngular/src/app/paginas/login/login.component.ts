import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from '../../shared/servicios/login.service';
import { PeticionesService } from '../../shared/servicios/peticiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  sesionIniciada: Observable<boolean>;
  subscripcion: Subscription;
  credencialesErroneas = false;
  sesion: boolean = false;
  formulario: FormGroup;

  constructor(private peticionesService: PeticionesService, private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
    this.formulario = new FormGroup({
      'nombreUsuario': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });

    this.sesionIniciada = this.loginService.getSesionIniciada();
    this.subscripcion = this.sesionIniciada.subscribe(sesion => this.sesion = sesion);
  }

  iniciarSesion() {
    this.peticionesService.comprobarCredencialesLogin(this.formulario.get('nombreUsuario').value, this.formulario.get('password').value)
      .subscribe(
        response => {
          this.credencialesErroneas = false;
          this.loginService.guardarUsuarioLogeado(this.formulario.get('nombreUsuario').value);
          this.loginService.cambiarValorSesion(true);
          this.router.navigate(['inicio']);
        },
        error => {
          this.credencialesErroneas = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

}
