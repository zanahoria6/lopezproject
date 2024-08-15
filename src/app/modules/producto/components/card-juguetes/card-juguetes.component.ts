import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-juguetes',
  templateUrl: './card-juguetes.component.html',
  styleUrls: ['./card-juguetes.component.css']
})
export class CardJuguetesComponent {

  // Coleccion de todos los productos
  coleccionProductos:Productos[]=[];

  // Coleccion de solo los productos de categoria "Juguetes"
  coleccionJuguetes:Productos[]=[];

  productoSeleccionado!:Productos

  modalVisible:boolean=false;

  constructor(public servicioCrud:CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto=>{
      this.coleccionProductos=producto
    })
    // Mostrar la coleccion actual de juguetes
  }

  mostrarProductoJuguete(){
    this.coleccionProductos.forEach(producto=>{
      // Si la categoria del producto es igual a "indumentaria", se enviara a la coleccion de jugetes especifica
      if(producto.categoria==="indumentaria"){
        // .push: sube o agrega un item a una coleccion
        this.coleccionJuguetes.push(producto);
      }
    })
  }

  // Muestra informacion completa de un producto elegido por el usuario
  mostrarVer(info:Productos){
    this.modalVisible=true;

    this.productoSeleccionado=info;
  }
}
