import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/shared/modelos/proyecto.model';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto;

  constructor(private peticionesService: PeticionesService) { }

  ngOnInit(): void {  }

}
