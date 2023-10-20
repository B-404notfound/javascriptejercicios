class Guardia{
    constructor(instalacion, turno){
        this._instalacion = instalacion;
        this._turno = turno;
    }
    get instalacion(){
        return this._instalacion;
    }
    set instalacion(instalacion){
        this._instalacion = instalacion;
    }
    get turno(){
        return this._turno;
    }
    set turno(turno){
        this._turno = turno;
    }
}
