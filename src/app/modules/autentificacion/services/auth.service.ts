import { Injectable } from '@angular/core';
// Servicio de autentificacion de Firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Referencio Auth de Firebase para inicializarlo
  constructor(
    private auth:AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ) { }
  

  // Funcion para registro
  registrar(email:string, password:string){

    // Retorna nueva informacion de email y contraseña
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  // Funcion para inicio de sesion
  iniciarSesion(email:string,password:string){
    //validar el email y la contraseña
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  // Funcion para cerrar sesion
  cerrarSesion(){

    // Retorna una promesa vacia
    return this.auth.signOut();
  }

  // Funcion para tomar UID
  async obtenerUid(){

    // Nos va a generear una promesa, y la constante la va a capturar
    // Las promesas tienen dos resultados: resuelta o rechazada
    const user = await this.auth.currentUser;

    /* 
    Si el usuario no respeta la estructura de la interfaz
    Si tuvo problemas para el registro, vease tener mal internet
    */

    if (user==null){
      return null;
    } else{
      return user.uid;
    }
  }

  // Funcion que busca un usuario en la coleccion de 'usuarios' cuyo correo electronico coincida con el valor proporcionado
  obtenerUsuario(email:string){
    return this.servicioFirestore.collection('usuarios', ref=>ref.where('email','==',email)).get().toPromise()
      
    
  }
}
