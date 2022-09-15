'use strict';

function main() {
    document.querySelector('#boton2').addEventListener('click', traeDatos);
}

document.addEventListener('DOMContentLoaded', main, false);

async function traeDatos() {

    let emplead = await fetch("/empleados.json");

    let datos = await empleados.json();

    let respuesta = document.querySelector('#respuesta');

    respuesta.innerHTML = '';


}
