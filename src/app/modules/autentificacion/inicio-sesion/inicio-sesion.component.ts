import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  // Booleano para ocultar la contraseña
  hide = true;
  
  
constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}

  usuariosIngresados: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: ""

  }

  async IniciarSesion(){

    const credenciales={
      email:this.usuariosIngresados.email,
      password:this.usuariosIngresados.password
    }

    try{
      const usuarioBD=await this.servicioAuth.obtenerUsuario(credenciales.email)

      // !-> si es diferente
      // .empty -> metodo de Firebase para marcar si algo es vacio
      if(!usuarioBD||usuarioBD.empty){
        alert ('El correo electronico no esta registrado')
        this.limpiarInputs()
          return
        
      }
      /* Primer documento (registro) en la coleccion de usuarios que se obtiene desde la consulta */
      const usuarioDoc=usuarioBD.docs[0]

      //Extraer los datos del documento en forma de un objeto y se especifica como de tipo
      //'Usuario' -> haciendo referencia a nuestra interfaz de Usuario.
      const usuarioData=usuarioDoc.data() as Usuario

      //Hash de la contraseña ingresada por el usuario
      const hashedPassword=CryptoJS.SHA256(credenciales.password).toString()

      if(hashedPassword!==usuarioData.password){
        alert("contraseña incorrecta")

        this.usuariosIngresados.password=''
        return
      }

      const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.password)
    .then (res=>{
      alert ('Se ha logueado con exito');

      this.servicioRutas.navigate(['/inicio'])
    })
    .catch(err=>{
      alert('Hubo un problema al iniciar sesion')

      this.limpiarInputs();
    })
    
    }catch{}

    
  }

  // Funcion para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      email: this.usuariosIngresados.email = '',
      password: this.usuariosIngresados.password = ''
    }
  }

  
}