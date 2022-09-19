'use strict';

function mayor() {
    document.querySelector('#empleado_que_mas_Gana ').addEventListener('click', mas_gana);
}

document.addEventListener('DOMContentLoaded', mas_gana, false);

async function mas_gana() {
    let empleados = await fetch("/empleados.json");

    let datos = await empleados.json();

    let respuesta = document.querySelector('#respuesta');

    respuesta.innerHTML = '';

    var mayor = 0

    for (let item of datos.empleados) {
        // console.log(item.salario);
        if (mayor < item.salario){
             mayor = item.salario
            respuesta.innerHTML = `<tr>
           <td>${item.identificacion}</td>
           <td>${item.nombre}</td>
           <td>${item.apellido}</td>
           <td>${item.salario}</td>
           <td>${item.area}</td>
         </tr>`
        }

    }
    console.log(mayor);
}

