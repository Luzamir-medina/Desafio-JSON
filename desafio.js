'use strict';

function main() {
  document.querySelector('#boton').addEventListener('click', traeDatos);
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