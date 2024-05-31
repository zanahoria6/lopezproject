import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

public coleccion:Usuario[]=[
  {
    uid:"",
    nombre:"",
    apellido: "",
    email:'',
    password:'',
    rol:""
  }
]



constructor(){
  this.coleccion=[
    {
      uid:"1",
      nombre:"Rodrigo",
      apellido: "Morales",
      email:'rodrigo@gmail.com',
      password:'123456',
      rol:"admin"
    },
    {
      uid:"2",
      nombre:"Santiago",
      apellido: "Ramirez",
      email:'santiago@gmail.com',
      password:'567890',
      rol:"visitante"
    }
  ]
}

loginMail: string=""
loginPassword: string=""

buscar(){

  const usuarioEncontrado =this.coleccion.find((nombre)=>nombre.email===this.loginMail&&nombre.password)
  if (usuarioEncontrado){
    alert("usuario encontrado: "+usuarioEncontrado.nombre)
  }else{
    alert("inicio fallido")
  }

  }
}
