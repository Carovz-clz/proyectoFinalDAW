import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectoFinalAngular';
  sesionIniciada: Observable<boolean>;
  sesion: boolean = false;

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.sesionIniciada = this.loginService.getSesionIniciada();
    this.sesionIniciada.subscribe(sesion => this.sesion = sesion);
  }


}
