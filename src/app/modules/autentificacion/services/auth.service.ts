import { Injectable } from '@angular/core';
//SERVICIO DE AUTENTIFICACION DE FIREBASE
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//REFERENCIAR AUTH DE FIREBASE PARA INICIALIZARLO
  constructor(public auth:AngularFireAuth) { }
  
  //funcion para tomar UID

  //funcion para registro
  registrar(email:string, password:string){
    //retorna nueva informacion de email y contraseña
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  //funcion para inicio de sesion
  iniciarSesion(email:string,password:string){
    //validar el email y la contraseña
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  //funcion para cerrar sesion
  cerrarSesion(){
    //devolver una promesa vacia
    return this.auth.signOut();
  }
}
