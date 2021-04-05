import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../modelos/proyecto.model';
import { PeticionesService } from '../servicios/peticiones.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos = [];

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.peticionesService.obtenerTodosLosProyectos()
      .subscribe( response => {
        this.proyectos = response;
        console.log(this.proyectos);
      })
  }

}
