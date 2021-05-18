import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from 'src/app/shared/servicios/peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  proyectos: any = [];
  usuario = '';

  constructor(private peticionesService: PeticionesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUsuario();

    this.peticionesService.obtenerTodosLosProyectosDeUsuario(this.usuario)
      .subscribe(response => {
        this.proyectos = response;

        if (this.proyectos.length > 0) {
          this.proyectos.sort((a, b) => {
            var dateA = moment(a.fecha, 'YYYY-MM-DD');
            var dateB = moment(b.fecha, 'YYYY-MM-DD');            
            return dateA < dateB;
          });
        }
        this.proyectos = this.proyectos.slice(0,2);
        
      })
  }

}
