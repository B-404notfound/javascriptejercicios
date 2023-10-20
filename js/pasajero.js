class Pasajero{
    constructor(nombre,apellido,rut) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._rut = rut;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get rut(){
        return this._rut;
    }
    set rut(rut){
        this._rut = rut;
    }
}