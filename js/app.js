const pasajeros = [
    new Pasajero('Juan','Ramirez','12.456.654-9'),
    new Pasajero('Luis','Poblete','23.567.654-9')
];

function mostrarPasajeros(){
    console.log('mostrar pasajeros');
    let texto = '';
    for(let pasajero of pasajeros){
        console.log(pasajero);
        texto += `<li>${pasajero.nombre} ${pasajero.apellido} ${pasajero.rut}</li>`;
    }
    document.getElementById('pasajeros').innerHTML= texto;
}

function agregarPasajeros(){
    const forma = document.forms['formulario'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const rut = forma['rut'];
    if(nombre.value!='' && apellido.value!='' && rut.value!=''){
        const pasajero = new Pasajero(nombre.value,apellido.value,rut.value);
        console.log(pasajero);
        pasajeros.push(pasajero);
        mostrarPasajeros();
    }
    else{
        console.log('no hay informacion que entregar');
    }
}