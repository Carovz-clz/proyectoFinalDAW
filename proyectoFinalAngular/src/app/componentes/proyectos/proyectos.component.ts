import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from '../../shared/servicios/peticiones.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos = [];
  usuario = '';

  constructor(private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUsuario();

    this.peticionesService.obtenerTodosLosProyectosDeUsuario(this.usuario)
      .subscribe( response => {
        this.proyectos = response;
        console.log(this.proyectos);
      })
  }

}
