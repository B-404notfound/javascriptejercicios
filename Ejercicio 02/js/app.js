const autos = [
    new Auto('V-16','Nissan','23.000'),
    new Auto('ford-Runner','Ford','45.000')
];

function mostrarAutos(){
    console.log('mostrar autos');
    let venta = '';
    for(let auto of autos){
        console.log(auto);
        venta += `<li>${auto.modelo} ${auto.marca} ${auto.precio} </li>`;
    }
    document.getElementById('autos').innerHTML = venta;
}

function agregarAutos(){
    const forma1 = document.forms['formulario'];
    const modelo = forma1['modelo'];
    const marca = forma1['marca'];
    const precio = forma1['precio'];
    if(modelo.value!=''&& marca.value!='' && precio.value!=''){
        const auto = new Auto(modelo.value,marca.value,precio.value);
        console.log(auto);
        autos.push(auto);
        mostrarAutos();
    }
    else{
        console.log('no hay informacion que agregar');
    }
}