function obtenerTodosEstadosActualizar() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerEstados = urlBase+"/Estado/listarEstados";//actular url
    const miPromesaEstados = fetch(apiObtenerEstados).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaEstados]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaEstado").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      c.innerHTML="<b>Id Estado</b>";
      d.innerHTML="<b>Descripcion<b>";
      e.innerHTML="<b>Actualizar</b>"
      crearFilasEstadosA(datos);
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

function crearFilasEstadosA(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idEstado = arregloObjeto[i].id_estado;
    const descEstado = arregloObjeto[i].descripcion;

    document.getElementById("tablaEstado").insertRow(-1).innerHTML =
    "<td>" + idEstado + "</td>" + "<td>" + descEstado + "</td>" 
    + "<td>" + "<button onClick='modificarEstado("+idEstado+")'class='btn btn-primary'> Actualizar </button>" + "</td>";
  }
}

function modificarEstado(idEstado){
  //window.location.href ="#EstadList";
  var descripcionNew=prompt("digite el estado actualizado");
  //validar los datos ingresados

  const apiActualizarEstacion = fetch(urlBase+"/Estado/"+idEstado, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id_estado': idEstado,
      'descripcion': descripcionNew
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarEstacion);

  Promise.all([apiActualizarEstacion]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#EstadList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#EstadUpdate";
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
    /*
    const actEstado = urlBase+"/Estado/"+idEstado;//actular url
    fetch(actEstado,{
        method:"PUT",
        body:JSON.stringify(objetoEnviar),
        headers:{"Content-type":"application/json; chasert=UTF-8"}
    }).then((resp) => resp.json())
    //.then((data) => console.log(data.respuesta));
    console.log(actEstado);
  
    Promise.all([actEstado]).then((datos) => {
      console.log(datos);
      Swal.fire({
        position: 'top-center',
        icon: 'success',//Icono https://fontawesome.com/icons
        title: 'Actualizado',
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error en el servidor',
      showConfirmButton: false,
      timer: 2000
    }));*/
};