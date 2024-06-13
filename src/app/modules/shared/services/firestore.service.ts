import { Injectable } from '@angular/core';
import{AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
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
}
