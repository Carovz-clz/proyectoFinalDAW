import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaUsuarioComponent } from './paginas/alta-usuario/alta-usuario.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { NuevoProyectoComponent } from './paginas/proyectos/nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch: 'full'},
  {path: 'alta', component: AltaUsuarioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'nuevoproyecto', component: NuevoProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
