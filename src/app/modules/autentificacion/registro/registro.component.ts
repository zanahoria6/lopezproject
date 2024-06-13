import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// SERVICIO DE AUTENTIFICACION
import { AuthService } from '../services/auth.service';
// SERVICIO DE RUTAS QUE OTORGA ANGULAR
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //este hide es para el input de contraseña
  hide = true;

  //importacion del modelo / interfaz
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  //crear una coleccion que solo recibe objetos de tipo usuarios
  coleccionUsuarios: Usuario[] = [];

  //referenciamos a nuestros servicios
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  //funcion para el registro
  //funcion asincronica para el registro
  async registrar() {
    //credenciales = informacion que ingrese el usuario

    /*
    const credenciales={
      uid:this.usuarios.uid,
      nombre:this.usuarios.nombre,
      apellido:this.usuarios.apellido,
      email:this.usuarios.email,
      rol:this.usuarios.rol,
      password:this.usuarios.password
    }
      */

    //enviamos los nuevos registros por medio del metodo push a la coleccion
    /*
    this.coleccionUsuarios.push(credenciales);

    alert("Te registraste con exito");
*/


    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    //constante 'respuesta' = resguarda una respuesta
      const respuesta= await this.servicioAuth.registrar(credenciales.email,credenciales.password)
      //el metodo THEN nos devuelve la respuesta esperada por la promesa
      .then(respuesta=>{
        alert("Ha agregado un usuario con exito")
        //accedemos al servicio de rutas --> metodo navigate 
        //metodo NAVIGATE = permite dirigirnos a diferentes vistas
        this.servicioRutas.navigate(['/inicio'])
      }  )

      .catch(error=> {
        alert('Hubo un problema al registrar un nuevo usuario')
      })

    //al terminar la funcion, limpio los inputs
    this.limpiarInputs();
  }

  //creo una funcion para limpiar los inputs
  limpiarInputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
