'use strict';
/*  var btn = document.getElementById('#boton'),
    respuesta = document.getElementById('#respuesta'),
    contador = 0;
 */

function main() {
    document.querySelector('#boton').addEventListener('click', traeDatos);
/*   if (contador == 0) {
respuesta.classList.add('respuesta');
contador = 1
 }
else {
respuesta.classList.remove('respuesta');
contador = 0;
} */
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
