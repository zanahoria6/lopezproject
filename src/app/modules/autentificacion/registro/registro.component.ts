import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //este hide es para el input de contraseña
  hide = true;

  //importacion del modelo / interfaz
  usuarios: Usuario={
    uid:'',
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    password:''
  }

  //crear una coleccion que solo recibe objetos de tipo usuarios
  coleccionUsuarios:Usuario[]=[];

  //funcion para el registro
  registrar(){
    //credenciales = informacion que ingrese el usuario
    const credenciales={
      uid:this.usuarios.uid,
      nombre:this.usuarios.nombre,
      apellido:this.usuarios.apellido,
      email:this.usuarios.email,
      rol:this.usuarios.rol,
      password:this.usuarios.password
    }

    //enviamos los nuevos registros por medio del metodo push a la coleccion
    this.coleccionUsuarios.push(credenciales);


    alert("Te registraste con exito");

    //al terminar la funcion, limpio los inputs
    this.limpiarInputs();
  }
  
  //creo una funcion para limpiar los inputs
  limpiarInputs(){
    const inputs={
      uid:this.usuarios.uid='',
      nombre:this.usuarios.nombre='',
      apellido:this.usuarios.apellido='',
      email:this.usuarios.email='',
      rol:this.usuarios.rol='',
      password:this.usuarios.password=''
    }
  }
}
