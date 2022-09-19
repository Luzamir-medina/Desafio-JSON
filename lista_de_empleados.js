'use strict';


function main() {
    document.querySelector('#Lista_de_empleados').addEventListener('click', traeDatos);
    document.querySelector('#refrescar').addEventListener('click', refresh);
}
function refresh() {
    window.location.reload("refrescar");
}
document.addEventListener('DOMContentLoaded', main, false);

async function traeDatos() {

  let empleados = await fetch("/empleados.json");

  let datos = await empleados.json();

  let respuesta = document.querySelector('#respuesta');

  respuesta.innerHTML = '';

  for (let item of datos.empleados) {
    // console.log( item.apellido);
    respuesta.innerHTML += `<tr>
           <td>${item.identificacion}</td>
           <td>${item.nombre}</td>
           <td>${item.apellido}</td>
           <td>${item.salario}</td>
           <td>${item.area}</td>
         </tr>`
    }
}

/*definicion de For: Un for en programación se usa cuando queremos repetir
 un conjunto de instrucciones un número finito de veces.
 La instrucción for permite repetir una instrucción o
 una instrucción compuesta un número especificado de veces.
  El cuerpo de una instrucción for se ejecuta cero o más veces hasta
 que una condición opcional sea false*/
