import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/servicios/login.service';
import { PeticionesService } from '../../shared/servicios/peticiones.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Input() pagina = '';
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
        }



        console.log(this.proyectos);
      })
  }


}
