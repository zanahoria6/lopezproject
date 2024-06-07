//creo la interfaz "Usuario"
export interface Usuario {
    uid:string| any; //Atributos tipo any = reciben valores indefinidos 
    nombre: string;
    apellido:string;
    email:string;
    rol: string;
    password: string;
}
