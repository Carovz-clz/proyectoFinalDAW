import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuario = 'prueba';
  isCollapsed = true;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.loginService.getUsuario();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  cerrarSesion(){
    this.loginService.cambiarValorSesion(false);
    this.router.navigate(['/login']);
  }

}
