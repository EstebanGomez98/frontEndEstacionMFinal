function obtenerTodosEstadosL() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerEstado = urlBase+"/Estado/listarEstados";
    const miPromesaEstado = fetch(apiObtenerEstado).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaEstado]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaEstado").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      c.innerHTML="<b>Id Estedo</b>";
      d.innerHTML="<b>Descripcion<b>";
      crearFilasEstadosLl(datos);
    });
  }else{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Acseso denegado',
      showConfirmButton: false,
      timer: 2000
    });
      window.location.href ="#home";
  }
 /*
  const apiListarDatoEstacion = fetch(urlBase+"/Authentication/requestToken", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer '+ token //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJlc3RlYmFuQGxlc3RvbWEuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsImV4cCI6MTY2NzA0ODQ4NCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA2OCIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNjgifQ.weYOIRw4EQELvUMZHsO5rnY-Gea0_LO7pF8LW76rTj8'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      'email': 'esteban@lestoma.com',
      'pass': 'Uesteban'
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiListarDatoEstacion);

  Promise.all([apiListarDatoEstacion]).then((datos) => {
    console.log(datos[0].token);    
  });*/
}

function crearFilasEstadosLl(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idEstado = arregloObjeto[i].id_estado;
    const descEstado = arregloObjeto[i].descripcion;

    document.getElementById("tablaEstado").insertRow(-1).innerHTML =
      "<td>" + idEstado + "</td>" + "<td>" + descEstado + "</td>";
  }
}
