import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  //booleano para ocultar la contraseña
  hide = true;
  
/*
  //############################### Inicio local
  //definimos la coleccion local
   public usuariosRegistrados: Usuario[] = []

  //coleccion local de usuarios de informacion

  //############################### Fin local
*/
  
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

    const res = await this.servicioAuth.iniciarSesion(credenciales.email,credenciales.password)
    .then (res=>{
      alert ('Se ha logueado con exito');

      this.servicioRutas.navigate(['/inicio'])
    })
    .catch(err=>{
      alert('Hubo un problema al iniciar sesion')

      this.limpiarInputs();
    })
  }

  //funcion para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      email: this.usuariosIngresados.email = '',
      password: this.usuariosIngresados.password = ''
    }
  }

  /*
  //############################### Inicio Registrado

  //importamos la interfaz de usuario e inicializamos vacio
  registrados: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: ""

  }

  //almaceno de manera local las variables que voy a comparar
  loginMail = this.registrados.email
  loginPassword = this.registrados.password

  //creo la funcion "buscar" que va a comparar los valores recibidos en el inicio de sesion
  //y los comparo con los usuarios ya registrados
  buscar() {
    const usuarioEncontrado = this.usuariosRegistrados.find((nombre) => nombre.email === this.loginMail && nombre.password === this.loginPassword)
    if (usuarioEncontrado) {
      alert('Bienvenido ' + usuarioEncontrado.nombre)
    } else {
      alert('Inicio de sesion fallido')
    }
  }

  //############################### Fin registrado

  */
}