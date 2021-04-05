import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaUsuarioComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    ProyectoComponent,
    NuevoProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
