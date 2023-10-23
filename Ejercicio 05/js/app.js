const personas = [
    new Persona('Alberto','Lopez'),
    new Persona('Camilo','Lopez')
];

function mostrarApp(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value!='' && apellido.value!=''){
        const persona = new Persona(nombre.value,apellido.value);
        personas.push(persona);
        mostrarApp();
    }
    else{
        alert('no hay informacion que agregar');
    }
}

