import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

// Encargadas de tener todas las rutas
const routes: Routes = [

  //Ruta comun --> 1 solo componente
  {
    path:"",
    component:InicioComponent
  },
  //Carga perezosa --> 1 modulo
  //loadChildre indica una ruta hija
  //()=>import: ruta de donde viene el modulo
  //.then:promesa/ funcion asincronica
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
