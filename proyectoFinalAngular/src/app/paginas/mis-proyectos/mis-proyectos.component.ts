import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit {
  proyectos: any = [];
  filtroNombre = '';
  filtroDescripcion = '';
  filtroFecha = '';

  constructor(private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.peticionesService.obtenerTodosLosProyectosDeUsuario(this.loginService.getUsuario())
    .subscribe( response => {
      this.proyectos = response;

        if (this.proyectos.lenght > 0) {
          this.proyectos = this.proyectos.sort((a, b) => {
            var dateA = new Date(a.fecha).getTime();
            var dateB = new Date(b.fecha).getTime();
            return dateA < dateB ? 1 : -1;
          });
        }

    })
  }

}
