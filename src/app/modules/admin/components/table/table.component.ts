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
}
