import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Definimos coleccion local de productos
  coleccionProductos:Productos[]=[]

  // Variable local para obtener producto seleccionado 
  productoSeleccionado!:Productos

  // Variable para manejar estado de un modal
  modalVisible: boolean=false

  // Booleano para manejar la visibilidad de "Ultima Compra"
  compraVisible:boolean=false

  // Directivas para comunicarse con el componente padre
  @Input()productoReciente: string=''

  // Output sera definido como un nuevo evento
  @Output()productoAgregado=new EventEmitter<Productos>

  constructor(public servicioCrud:CrudService){}

  ngOnInit():void{
    this.servicioCrud.obtenerProducto().subscribe(producto=>{
      this.coleccionProductos=producto
    })
  }

  // Funcion para el modal que muestre la informacion de un producto en especifico
mostrarVer(info:Productos){
  // Habilita visibilidad del modal
  this.modalVisible=true;

  // Guarda informacion de un producto elegido por el usuario
  this.productoSeleccionado=info;
}
agregarProducto(info:Productos){
  this.productoAgregado.emit(info)

    this.compraVisible=true
  
}

}
