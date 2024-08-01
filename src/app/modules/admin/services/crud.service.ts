import { Injectable } from '@angular/core';
import { Productos } from 'src/app/models/productos';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
// Definimos coleccion para los productos de la web del tipo Producto
  private productosCollection:AngularFirestoreCollection<Productos> //idbsfbhadsfgdsfjbhdsajfdasfjas

  constructor(private database:AngularFirestore) { 
    // Referenciamos coleccion productos y sera subida como "producto" a Firebase
    this.productosCollection=database.collection('producto');
  }

  // Crear productos
  crearProducto(producto:Productos){
    return new Promise(async (resolve, reject)=>{
      try{
        // Creamos numero identificativo para el producto en la base de datos
        const idProducto=this.database.createId();

        // Asignamos ID creado al atributo idProducto de la interfaz "Producto"
        producto.idProducto=idProducto;

        const resultado=await this.productosCollection.doc(idProducto).set(producto);

        resolve(resultado);
      }catch(error){
        reject(error)
      }
    })
  }
  // Obtener productos
  // Editar productos
  // Eliminar productos
}
