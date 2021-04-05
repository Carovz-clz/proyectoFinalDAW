import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos/proyecto.model';
import { PeticionesService } from 'src/app/servicios/peticiones.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto;
  tareas = [];

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.peticionesService.obtenerTareasDeProyecto(this.proyecto.idproyecto)
      .subscribe(response => {
        this.tareas = response;
      });
  }

}
