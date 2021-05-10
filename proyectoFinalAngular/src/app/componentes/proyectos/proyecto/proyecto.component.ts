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
  @Input() eliminar = false;
  @Input() mostrarIconos = false;
  @Input() mostrarTareas = false;
  @Output() eliminarP = new EventEmitter<Number>();
  tareas = [];
  editar = false;
  faFilePdf = faFilePdf;
  faEdit = faEdit;
  faUserPlus = faUserPlus;

  constructor(private peticionesService: PeticionesService, private router: Router) { }

  ngOnInit(): void { 
    this.tareas = this.proyecto.tareas;
   }

  eliminarProyecto(){
    this.eliminarP.emit(this.proyecto.idProyecto);
    
  }

  cambiarEstadoTarea(i){
    this.tareas[i].realizada = (this.tareas[i].realizada == 1) ? 0 : 1;
    console.log({idtarea: this.tareas[i].idtarea, idproyecto: this.proyecto.idProyecto, descripcion: this.tareas[i].descripcion, realizada: this.tareas[i].realizada});
    this.peticionesService.cambiarEstadoTarea({idtarea: this.tareas[i].idtarea, idproyecto: this.proyecto.idProyecto, descripcion: this.tareas[i].descripcion, realizada: this.tareas[i].realizada})
      .subscribe( response => {
        console.log(response);
      });
  }

  editarProyecto(){
    this.editar = true;
  }

  cambiarEditar(){
    this.editar = false;
  }

}
