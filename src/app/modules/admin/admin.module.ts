import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Archivo de rutas del modulo
import { AdminRoutingModule } from './admin-routing.module';

// Componente de vista
import { AdminComponent } from './pages/admin/admin.component';

// Componente local
import { TableComponent } from './components/table/table.component';


import { MatIconModule } from '@angular/material/icon';
//Paqueterias de formularios y formularios reactivos de angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AdminComponent,
    TableComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
