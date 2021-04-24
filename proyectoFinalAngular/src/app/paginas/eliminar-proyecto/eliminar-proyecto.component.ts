import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-eliminar-proyecto',
  templateUrl: './eliminar-proyecto.component.html',
  styleUrls: ['./eliminar-proyecto.component.css']
})
export class EliminarProyectoComponent implements OnInit {
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
