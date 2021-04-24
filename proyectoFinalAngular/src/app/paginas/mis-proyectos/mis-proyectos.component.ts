import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  proyectos = [];
  filtroNombre = '';
  filtroDescripcion = '';
  filtroFecha = '';

  constructor(private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.peticionesService.obtenerTodosLosProyectosDeUsuario(this.loginService.getUsuario())
    .subscribe( response => {
      this.proyectos = response;
      console.log(this.proyectos);
    })
  }

}
