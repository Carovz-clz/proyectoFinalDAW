import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/shared/modelos/proyecto.model';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto;
  @Input() eliminar= false;

  constructor(private peticionesService: PeticionesService, private router: Router) { }

  ngOnInit(): void {  }

  eliminarProyecto(){
    this.peticionesService.eliminarProyectoPorId(this.proyecto.idProyecto)
      .subscribe( response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
  }

}
