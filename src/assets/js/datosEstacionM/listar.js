function obtenerTodosDatosEM() {
  if(idEst=="1"){
    const apiObtenerDatosEstacionM = urlBase+"/DatoEstacionMeteorologica/listarDatoEstacionM";
    const miPromesaDatosEstacionM = fetch(apiObtenerDatosEstacionM).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaDatosEstacionM]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaDatosEstacionM").createTHead();
      var b = a.insertRow(0);
      var c = b.insertCell(0); 
      var d = b.insertCell(1);
      var e = b.insertCell(2);
      var f = b.insertCell(3);
      var g = b.insertCell(4);
      c.innerHTML="<b>id_dato_estacion_meteorologica</b>";
      d.innerHTML="<b>id_estacion_meteorologica<b>";
      e.innerHTML="<b>fecha_hora</b>";
      f.innerHTML="<b>id_sensor</b>";
      g.innerHTML="<b>valor</b>"
      ListarDatoEstacionM(datos);
      //
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

function ListarDatoEstacionM(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idDatosEstacionM = arregloObjeto[i].id_dato_estacion_meteorologica;
    const idEstacionM = arregloObjeto[i].id_estacion_meteorologica;
    const fechaHora = arregloObjeto[i].fecha_hora;
    const idSensor = arregloObjeto[i].id_sensor;
    const valor = arregloObjeto[i].valor;

    document.getElementById("tablaDatosEstacionM").insertRow(-1).innerHTML =
      "<td>" + idDatosEstacionM + "</td>" + "<td>" + idEstacionM + "</td>" + "<td>" + fechaHora + "</td>" 
      + "<td>" + idSensor + "</td>" + "<td>" + valor + "</td>";
  }
}
