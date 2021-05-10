import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-eliminar-proyecto',
  templateUrl: './eliminar-proyecto.component.html',
  styleUrls: ['./eliminar-proyecto.component.css']
})
export class EliminarProyectoComponent implements OnInit {
  proyectos: any = [];
  filtroNombre = '';
  filtroDescripcion = '';
  filtroFecha = '';
  modalConfirmacion = false;
  idProyecto = 0;

  constructor(private peticionesService: PeticionesService, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.peticionesService.obtenerTodosLosProyectosDeUsuario(this.loginService.getUsuario())
      .subscribe(response => {
        this.proyectos = response;

        if (this.proyectos.lenght > 0) {
          this.proyectos = this.proyectos.sort((a, b) => {
            var dateA = new Date(a.fecha).getTime();
            var dateB = new Date(b.fecha).getTime();
            return dateA < dateB ? 1 : -1;
          });
        }

        console.log(this.proyectos);
      })
  }

  eliminarProyecto(id) {
    this.idProyecto = id;
    this.modalConfirmacion = true;
  }

  confirmarEliminacion(confirmacion) {
    if (confirmacion) {
      this.peticionesService.eliminarProyectoPorId(this.idProyecto)
        .subscribe(response => {
          console.log(response);
          this.modalConfirmacion = false;
          this.router.navigate(['/inicio']);
        })
    }

  }

}
