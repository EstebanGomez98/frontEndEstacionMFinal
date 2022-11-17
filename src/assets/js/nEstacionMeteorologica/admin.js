function obtenerTodasEstacionesMeteoActualizar() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerEstacionesM = urlBase+"/NEstacionMeteorologica/listarEstacionM";//actular url
    const miPromesaEstacionesM = fetch(apiObtenerEstacionesM).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaEstacionesM]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaEstacionesM").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      c.innerHTML="<b>Id estacion meteorologica</b>";
      d.innerHTML="<b>Nombre<b>";
      e.innerHTML="<b>Actualizar</b>"
      crearFilasEstacionesML(datos);
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
}

function crearFilasEstacionesML(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idEstacionMeteologica = arregloObjeto[i].id_estacion_meteorologica;
    const nombre = arregloObjeto[i].nombre;

    document.getElementById("tablaEstacionesM").insertRow(-1).innerHTML =
    "<td>" + idEstacionMeteologica + "</td>" + "<td>" + nombre + "</td>" 
    + "<td>" + "<button onClick='modificarEstacionesM("+idEstacionMeteologica+")'class='btn btn-primary'> Actualizar </button>" + "</td>";
  }
}

function modificarEstacionesM(idEstacionMeteologica){
  //window.location.href ="#EstadList";
  var nombreNew=prompt("digite el nombre actualizado");
  //validar los datos ingresados

  const apiActualizarEstacion = fetch(urlBase+"/NEstacionMeteorologica/"+idEstacionMeteologica, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "id_estacion_meteorologica": idEstacionMeteologica,
      "nombre": nombreNew
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarEstacion);

  Promise.all([apiActualizarEstacion]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#EstacionMList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#EstacionMUpdate";
      token = null;
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al actualizar',
        showConfirmButton: false,
        timer: 2000
      });
    }
});
};