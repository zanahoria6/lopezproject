import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

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
  ) { }

  usuariosIngresados: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: ""

  }

  async IniciarSesion() {

    const credenciales = {
      email: this.usuariosIngresados.email,
      password: this.usuariosIngresados.password
    }

    try {
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      // !-> si es diferente
      // .empty -> metodo de Firebase para marcar si algo es vacio
      if (!usuarioBD || usuarioBD.empty) {

        Swal.fire({
          title: "Error!",
          text: "El usuario no esta registrado",
          icon: "error"
        });

        this.limpiarInputs();
        return;

      }
      /* Primer documento (registro) en la coleccion de usuarios que se obtiene desde la consulta */
      const usuarioDoc = usuarioBD.docs[0];

      //Extraer los datos del documento en forma de un objeto y se especifica como de tipo
      //'Usuario' -> haciendo referencia a nuestra interfaz de Usuario.
      const usuarioData = usuarioDoc.data() as Usuario;

      //Hash de la contraseña ingresada por el usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if (hashedPassword !== usuarioData.password) {

        Swal.fire({
          title: "Error!",
          text: "Hubo un problema con la contraseña",
          icon: "error"
        });

        this.usuariosIngresados.password = '';
        return;
      }




      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
        .then(res => {

          Swal.fire({
            title: `¡Bienvenido, ${usuarioData.nombre}!`, // use templates para tomar el nombre de usuario desde la base de datos
            text: "Inicio de sesion exitoso",
            icon: "success"
          });

          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: "Hubo un problema al iniciar sesion",
            icon: "error"
          });

          this.limpiarInputs();
        })

    } catch { }


  }

  // Funcion para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      email: this.usuariosIngresados.email = '',
      password: this.usuariosIngresados.password = ''
    }
  }
}