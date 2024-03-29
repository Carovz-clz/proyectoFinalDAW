import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaUsuarioComponent } from './paginas/alta-usuario/alta-usuario.component';
import { DatosUsuarioComponent } from './paginas/datos-usuario/datos-usuario.component';
import { EliminarProyectoComponent } from './paginas/eliminar-proyecto/eliminar-proyecto.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { MisProyectosComponent } from './paginas/mis-proyectos/mis-proyectos.component';
import { NuevoProyectoComponent } from './paginas/nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'alta', component: AltaUsuarioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'nuevoproyecto', component: NuevoProyectoComponent},
  {path: 'eliminarproyecto', component: EliminarProyectoComponent},
  {path: 'misproyectos', component: MisProyectosComponent},
  {path: 'misdatos', component: DatosUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
