import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { CrudService } from '../../services/crud.service';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Crear coleccion de productos del tipo producto -> lo definimos como un array
  coleccionProductos: Productos[]=[];

  // Variable para manejar el estado de Edicion y Eliminacion de productos
  modalVisibleProducto:boolean=false;

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!:Productos; // <-- recibe valores vacios

  // Definimos formulario para los productos
  /*
  - Atributos alfanumericos (string) se inicializan con comillas simples
  - Atributos numericos (number) se inicializan con cero (0)
  */

  producto=new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio: new FormControl(0,Validators.required),
    descripcion: new FormControl('',Validators.required),
    categoria: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required),
    alt: new FormControl('',Validators.required)
  }) 

  constructor(public servicioCrud:CrudService){}

  ngOnInit():void{
    // subscribe notifica constantemente los cambios actuales del sistema 
    this.servicioCrud.obtenerProducto().subscribe(producto=>{
      this.coleccionProductos=producto;
    })
  }
 async agregarProducto(){
  // validamos los valores del producto agregado
  if(this.producto.valid){
    let nuevoProducto: Productos={
      // idProducto no se toma porque es generado por la BD y no por el usuario
      idProducto:'',
      // el resto es tomado con informacion ingresada por el usuario
      nombre:this.producto.value.nombre!,
      descripcion:this.producto.value.descripcion!,
      precio:this.producto.value.precio!,
      categoria:this.producto.value.categoria!,
      imagen:this.producto.value.imagen!,
      alt:this.producto.value.alt!
    }
    await this.servicioCrud.crearProducto(nuevoProducto)
    .then(producto=>{
      alert ("Ha agregado un nuevo producto con exito")
    })
    .catch(error=>{
      alert("Hubo un error al agregar un nuevo producto")
    })
  }
  }

  // Funcion para alertar al usuario del producto que desea eliminar
  mostrarBorrar(productoSeleccionado:Productos){
    this.modalVisibleProducto=true; // abre el modal
    this.productoSeleccionado=productoSeleccionado; // toma los valores del producto eligido
  }

  // Funcion para eliminar definitivamente al producto
  borrarProducto(){
this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
.then(respuesta=>{
  alert("El producto se ha eliminado correctamente")
})
.catch(error=>{
  alert("No se ha podido eliminar el producto \n"+error)
})
  }
}
