//console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
   
  //console,log('dentro de la funcion');

  const xhttp = new XMLHttpRequest();


  xhttp.open('GET', 'empleados.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){

      //console.log(this.responseText);
      let datos = JSON.parse(this.responseText);
      //console.log(datos);
      let respuesta =document.querySelector('#respuesta');
      respuesta.innerHTML = ' ';

      for(let item of datos){
       // console.log(item.nombre);
       respuesta.innerHTML += `
            <tr>
               <td>${item.identificación}</td>
               <td>${item.nombre}</td> 
               <td>${item.apellido}</td>
               <td>${item.salario}</td> 
               <td>${item.área}</td> 
            </tr>
       `
      }

    }
  }

}