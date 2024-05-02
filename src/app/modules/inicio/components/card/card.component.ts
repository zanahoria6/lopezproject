import { Component } from '@angular/core';
//Importamos interfaz
import { Arroz } from 'src/app/models/arroz';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //Propiedad publica (tipo array)
  public info: Arroz[];

  constructor(){
    this.info=[
      {
        id:"1",
        nombre:"grano largo",
        imagen:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfzmjlT83IhnjHacu_87un75ISRuCQN5NoHLVJXEj8G23zjMcH",
        alt:"arroz de grano largo",
        coccion:30
      },
      {
        id:"2",
        nombre:"salvaje",
        imagen:"https://www.paulinacocina.net/wp-content/uploads/2023/10/recetas-con-arroz-salvaje-paulina-cocina-recetas.jpg",
        alt:"arroz salvaje",
        coccion:10
      },
      {
        id:"2",
        nombre:"redondo",
        imagen:"https://st2.depositphotos.com/1000504/7619/i/950/depositphotos_76190531-stock-photo-bowl-of-round-rice.jpg",
        alt:"arroz redondo",
        coccion:20
      }
    ]
  }
}
