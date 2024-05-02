import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//Vista - Pagina - Interfa de usuario
import { InicioComponent } from './pages/inicio/inicio.component';

//Componentes locales
import { CardComponent } from './components/card/card.component';

//Importaciones de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
