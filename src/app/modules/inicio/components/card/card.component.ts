import { Component } from '@angular/core';
//importamos la interfaz
import { Productos } from 'src/app/models/productos';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
//propiedad publica (tipo array)
public info:Productos[]
constructor(){
  this.info=[
    {
      idProducto:"",
      nombre:"Creatina en polvo ENA 300g",
      precio: 50000,
      imagen:"../../../../../assets/creatina-ena.jpg",
      descripcion:"",
      categoria:"",
      alt:""
        },
    {
      idProducto:"",
      nombre:"Proteina en polvo Whey 924g",
      precio: 30000,
      imagen:"../../../../../assets/Proteina-Whey.webp",
      descripcion:"",
      categoria:"",
      alt:""
    },
    {
      idProducto:"",
      nombre:"Preentreno psycotic gold 215g",
      precio: 30000,
      imagen:"../../../../../assets/Preentreno-psychoticgold.webp",
      descripcion:"",
      categoria:"",
      alt:""
    }
  ]
}
}
