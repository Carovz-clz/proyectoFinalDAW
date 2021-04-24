import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private sesionIniciada = new Subject<boolean>();
  usuario = '';
  sesion = false;

  constructor() { }

  cambiarValorSesion(valor){
    this.sesion = valor;
    this.sesionIniciada.next(this.sesion);
    console.log("Sesion"+this.sesion);
  }

  getSesionIniciada(){
    return this.sesionIniciada.asObservable();
  }

  guardarUsuarioLogeado(usuario){
    this.usuario = usuario;
  }

  getUsuario(){
    return this.usuario;
  }
}
