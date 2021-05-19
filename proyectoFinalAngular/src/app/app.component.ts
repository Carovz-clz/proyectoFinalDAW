import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from './shared/servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'proyectoFinalAngular';
  sesionIniciada: Observable<boolean>;
  sesion: boolean = false;
  subscripcion: Subscription;

  constructor(private loginService: LoginService, private router: Router){}
  

  ngOnInit(): void {
    this.sesionIniciada = this.loginService.getSesionIniciada();
    this.subscripcion = this.sesionIniciada.subscribe(sesion => this.sesion = sesion);

    if(this.sesion == false){
      this.router.navigate(['login']);
    }
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();    
  }
}
