import { Component, Input, OnInit } from '@angular/core';
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

        if (this.proyectos.lenght > 0) {
          this.proyectos = this.proyectos.sort((a, b) => {
            var dateA = new Date(a.fecha).getTime();
            var dateB = new Date(b.fecha).getTime();
            return dateA < dateB ? 1 : -1;
          });

          console.log(this.proyectos);
        }

        this.proyectos = this.proyectos.slice(0,2);
        
      })
  }

}
