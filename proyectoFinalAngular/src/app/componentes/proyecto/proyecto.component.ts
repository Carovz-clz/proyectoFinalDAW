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
  colaborar = false;
  faFilePdf = faFilePdf;
  faEdit = faEdit;
  faUserPlus = faUserPlus;
  porcentaje = 0;
  estilo = '';

  constructor(private peticionesService: PeticionesService, private router: Router) { }

  ngOnInit(): void { 
    this.tareas = this.proyecto.tareas;
    this.asignarEstiloBarraDeProgreso();
   }

  eliminarProyecto(){
    this.eliminarP.emit(this.proyecto.idProyecto);
    
  }

  cambiarEstadoTarea(i){
    this.tareas[i].realizada = (this.tareas[i].realizada == 1) ? 0 : 1;
    this.peticionesService.cambiarEstadoTarea({idtarea: this.tareas[i].idtarea, idproyecto: this.proyecto.idProyecto, descripcion: this.tareas[i].descripcion, realizada: this.tareas[i].realizada})
      .subscribe( response => {
      });

      this.asignarEstiloBarraDeProgreso();    

  }

  asignarEstiloBarraDeProgreso(){
    let tareasCompletadas = 0;

    this.tareas.forEach(element => {
      if (element.realizada == 1){
        tareasCompletadas++;
      }
    });

    let avance = Math.round((tareasCompletadas / this.tareas.length) * 100) ;

    this.porcentaje = avance;
    this.estilo = 'width:'+avance+'%';
  }

  editarProyecto(){
    this.editar = true;
  }

  cambiarEditar(){
    this.editar = false;
  }

  guardarProyecto(p){
        
    this.proyecto.nombreProyecto = p.nombreProyecto;
    this.proyecto.descripcion = p.descripcion;

    this.peticionesService.obtenerTareasPorIdProyecto(this.proyecto.idProyecto)
    .subscribe( response => {
      this.tareas = response;
      this.proyecto.tareas = response;
      this.asignarEstiloBarraDeProgreso();
    });

    
  }

  agregarColaborador(){
    this.colaborar = true;
  }

  cambiarColaborar(){
    this.colaborar = false;
  }

  exportar(){
    this.peticionesService.exportarAPdf(this.proyecto.idProyecto)
    .subscribe(
      response => {
        const fileURL = URL.createObjectURL(response);
        window.open(fileURL, '_blank');
      }
    );
  }

}
