import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { ReplaySubject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // definimos una coleccion de usuarios PRIVADA
  // va a ser una coleccion de Firestore
  // respetara la estructura de datos de la interfaz Usuario
  // '<>' referencia la interfaz
  private usuariosCollection:AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    this.usuariosCollection=this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario:Usuario, id:string){

    /*
    Generamos nueva PROMESA y utiliza los metodos:
    Resolve: promesa resuelta --> funciona correctamente
    Reject: promesa rechaza --> ocurrrio una falla
    */
    return new Promise(async(resolve, reject)=>{
      //bloque try encapsula la logica resuelta
      try{
        usuario.uid=id;

        /* 
        const resultado = coleccion de usuarios, envia como documento el UID
        y setea la informacion que ingresamos que ingresemos en el REGISTRO
        */
        const resultado =await this.usuariosCollection.doc(id).set(usuario);

        resolve(resultado);

        //bloque catch encapsula una falla y la vuelve un error
      }catch(error){}
    })
  }

/*
Conclusion

PROMESA -> promete devolver algo
TRY -> encapsula la promesa resuelta
CATCH -> encapsula una falla y la rechaza como error
*/


}
