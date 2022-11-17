function obtenerTodosEstadoL() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerEstacionesM = urlBase+"/NEstacionMeteorologica/listarEstacionM";
    const miPromesaEstacionesM = fetch(apiObtenerEstacionesM).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaEstacionesM]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaEstacionesM").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      c.innerHTML="<b>Id estacion meteorologica</b>";
      d.innerHTML="<b>Nombre<b>";
      FilasEstacionesML(datos);
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

function FilasEstacionesML(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idEstacionMeteorologica = arregloObjeto[i].id_estacion_meteorologica;
    const nombre = arregloObjeto[i].nombre;
    document.getElementById("tablaEstacionesM").insertRow(-1).innerHTML =
      "<td>" + idEstacionMeteorologica + "</td>" + "<td>" + nombre + "</td>";
  }
}
