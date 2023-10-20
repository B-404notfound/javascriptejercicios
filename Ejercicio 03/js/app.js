const guardias = [
    new Guardia('mc donalds providencia','12:00 hrs'),
    new Guardia('GTD-Panamericana','12:00 hrs')
];

function mostrarInstalaciones(){
    console.log('mostrar instalaciones');
    let instalacion = '';
    for(let inst of guardias){
        console.log(inst);
        instalacion += `<li>${inst.instalacion} ${inst.turno}</li>`;
    }
    document.getElementById('instalaciones').innerHTML= instalacion;
}

function agregarInstalacion(){
    const formulario = document.forms['formulario1'];
    const instalacions = formulario['instalacion'];
    const turno = formulario['turno'];
    if(instalacion.value !='' && turno.value!=''){
        const instalaciones = new Guardia(instalacion.value,turno.value);
        console.log(instalaciones);
        guardias.push(instalaciones);
        mostrarInstalaciones();
    }
    else{
        console.log('no hay nada que agregar');
    }
}