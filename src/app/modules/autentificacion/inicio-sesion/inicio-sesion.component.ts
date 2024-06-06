import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  //booleano para ocultar la contraseña
  hide = true;

  //############################### Inicio local
  //definimos la coleccion local
  public usuariosRegistrados: Usuario[] = []

  //coleccion local de usuarios de informacion
  constructor() {
    this.usuariosRegistrados = [
      {
        uid: "1",
        nombre: "tomas",
        apellido: "lopez",
        email: "lopezruiztomas59@gmail.com",
        rol: "admin",
        password: "123456"
      },
      {
        uid: "2",
        nombre: "agustin",
        apellido: "fuentes",
        email: "fuentesagustin@gmail.com",
        rol: "visitante",
        password: "123456"
      }
    ]
  }

  //############################### Fin local

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
}
