//console.log('correcto')


document.querySelector('#boton').addEventListener('click', traeDatos);

function traeDatos(){

  //  console.log('dentro de la funcion');

    const empleados = new empleadosrequest();

    empleados.open('GET', 'empleados.json', true);

    empleados.send();

    empleados.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){


            // console.log(this.resposeText);
        let datos = JSON.parse(this.resposeText);
       // console.log(datos);

       let respuesta = document.querySelector('#respuesta');
       respuesta.innerHTML = '';

        for(let item of datos){
           // console.log( item.apellido);
           respuesta.innerHTML += `
           
           <tr>
           <td>${item.Identificación}</td>
           <td>${item.Nombre}</td>
           <td>${item.Apellido}</td>
           <td>${item.Salario}</td>
           <td>${item.Area}</td>
         </tr>
           
           `


        }

        }

       
    }


}