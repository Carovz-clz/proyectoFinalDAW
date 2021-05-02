import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faFilePdf, faEdit, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto;
  @Input() eliminar= false;
  @Output() eliminarP = new EventEmitter<Number>();
  faFilePdf = faFilePdf;
  faEdit = faEdit;
  faUserPlus = faUserPlus;

  constructor(private peticionesService: PeticionesService, private router: Router) { }

  ngOnInit(): void {  }

  eliminarProyecto(){
    this.eliminarP.emit(this.proyecto.idProyecto);
    
  }

}
