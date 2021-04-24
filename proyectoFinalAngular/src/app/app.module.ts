import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaUsuarioComponent } from './paginas/alta-usuario/alta-usuario.component';
import { LoginComponent } from './paginas/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProyectoComponent } from './componentes/proyectos/proyecto/proyecto.component';
import { NuevoProyectoComponent } from './paginas/nuevo-proyecto/nuevo-proyecto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EliminarProyectoComponent } from './paginas/eliminar-proyecto/eliminar-proyecto.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { FiltroNombreProyectoPipe } from './shared/pipes/filtro-nombre-proyecto.pipe';
import { FiltroDescripcionPipe } from './shared/pipes/filtro-descripcion.pipe';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaUsuarioComponent,
    LoginComponent,
    HeaderComponent,
    InicioComponent,
    ProyectoComponent,
    NuevoProyectoComponent,
    ProyectosComponent,
    EliminarProyectoComponent,
    BuscadorComponent,
    FiltroNombreProyectoPipe,
    FiltroDescripcionPipe,
    LoadingSpinnerComponent
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
