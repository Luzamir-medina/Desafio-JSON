'use strict';

function main() {
  document.querySelector('#boton').addEventListener('click', traeDatos);
}

document.addEventListener('DOMContentLoaded', main, false);

function traeDatos() {

  //  console.log('dentro de la funcion');

  let empleados = new XMLHttpRequest();

  empleados.open('GET', '/empleados.json', true);

  empleados.send();

  empleados.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

      // console.log(this.resposeText);
      let datos = JSON.parse(this.response);

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
  }
}
