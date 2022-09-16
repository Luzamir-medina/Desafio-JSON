// function menor() {
//     document.querySelector('#empleado_que_mas_Gana ').addEventListener('click', menos_gana);
// }

// document.addEventListener('DOMContentLoaded', menos_gana, false);

// async function menos_gana() {
//     let empleados = await fetch("/empleados.json");

//     let datos = await empleados.json();

//     let respuesta = document.querySelector('#respuesta');

//     respuesta.innerHTML = '';

//     var menor = 240000

//     for (let item of datos.empleados) {
//         // console.log(item.salario);
//         if (menor > item.salario) {
//             menor = item.salario
//             respuesta.innerHTML = `<tr>
//            <td>${item.identificacion}</td>
//            <td>${item.nombre}</td>
//            <td>${item.apellido}</td>
//            <td>${item.salario}</td>
//            <td>${item.area}</td>
//          </tr>`
//         }

//     }
//     console.log(menor);
// }
