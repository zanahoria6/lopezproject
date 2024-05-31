import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importacion a las vistas del modulo autentificacion 
import { RegistroComponent } from './registro/registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';


const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
{
  path:"inicio-sesion",component:InicioSesionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
