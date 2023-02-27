export class Contacto {
    name = '';
    apellido = '';
    email = '';
    estado = false

    constructor(name, apellido,email,estado){
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.estado = estado
    }
}