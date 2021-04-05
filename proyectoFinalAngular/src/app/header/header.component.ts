import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUsuario();
  }

  cerrarSesion(){
    this.loginService.cambiarValorSesion(false);
  }

}
