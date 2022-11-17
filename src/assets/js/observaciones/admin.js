function obtenerTodosobservacionesesActulizar() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerObservaciones = urlBase+"/Observacion/listarObservaciones";//actular url
    const miPromesaObservaciones = fetch(apiObtenerObservaciones).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaObservaciones]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaObservaciones").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      var f = b.insertCell(3);
      c.innerHTML="<b>Id observacion</b>";
      d.innerHTML="<b>Id usuario<b>";
      e.innerHTML="<b>Fecha</b>";
      f.innerHTML="<b>descripcion</b>";
      crearFilasObservacionesA(datos);
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

function crearFilasObservacionesA(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idobservacion = arregloObjeto[i].id_observacion;
    const idUsuario = arregloObjeto[i].id_usuario;
    const fecha = arregloObjeto[i].fecha;
    const descripcion = arregloObjeto[i].descripcion;

    document.getElementById("tablaObservaciones").insertRow(-1).innerHTML =
    "<td>" + idobservacion + "</td>" + "<td>" + idUsuario + "</td>" + "<td>" + fecha + "</td>" + "<td>" 
    + descripcion + "</td>";
  }
};