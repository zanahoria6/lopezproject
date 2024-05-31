import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;
iniciarSesion(){
  const credenciales={

  }
}

public sesion:Usuario[]
constructor(){
  this.sesion=[
    {
      uid:"1",
      nombre:"Rodrigo",
      apellido: "Morales",
      email:'rodrigo@gmail.com',
      password:'12345',
      rol:"admin"
    },
    {
      uid:"2",
      nombre:"Santiago",
      apellido: "Ramirez",
      email:'santiago@gmail.com',
      password:'67890',
      rol:"visitante"
    }
  ]
}
}
