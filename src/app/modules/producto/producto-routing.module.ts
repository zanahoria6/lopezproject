import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importaciones de la vista
import { ProductoComponent } from './pages/producto/producto.component';
import { ArrozComponent } from './pages/arroz/arroz.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { BuzosComponent } from './pages/buzos/buzos.component';


const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"arroz", component:ArrozComponent
  },
  {
    path:"recetas",component:RecetasComponent
  },
  {
    path:"buzos", component:BuzosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
