'use strict';

function medio() {
    document.querySelector('#salario_medio').addEventListener('click', salario_medio);
}

document.addEventListener('DOMContentLoaded', salario_medio, false);

async function salario_medio() {
    let empleados = await fetch("/empleados.json");

    let datos = await empleados.json();

    let respuesta = document.querySelector('#respuesta');

    respuesta.innerHTML = '';
