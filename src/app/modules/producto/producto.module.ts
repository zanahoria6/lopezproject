import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { ArrozComponent } from './pages/arroz/arroz.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { BuzosComponent } from './pages/buzos/buzos.component';


@NgModule({
  declarations: [
    ProductoComponent,
    ArrozComponent,
    RecetasComponent,
    BuzosComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    ArrozComponent,
    RecetasComponent,
    BuzosComponent
  ]
  
})
export class ProductoModule { }
