function obtenerTodosSensoresActulizar() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerSensores = urlBase+"/Sensor/listarsensores";//actular url
    const miPromesaSensores = fetch(apiObtenerSensores).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaSensores]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaSensor").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      var f = b.insertCell(3);
      var g = b.insertCell(4);
      c.innerHTML="<b>Id Sensor</b>";
      d.innerHTML="<b>Descripcion<b>";
      e.innerHTML="<b>Actualizar</b>";
      f.innerHTML="<b>Id Estado</b>";
      g.innerHTML="<b>Estados</b>";
      crearFilasSensoresA(datos);
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

function crearFilasSensoresA(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idSensor = arregloObjeto[i].id_sensor;
    const descSensor = arregloObjeto[i].descripcion;
    const idEstado = arregloObjeto[i].id_estado;

    document.getElementById("tablaSensor").insertRow(-1).innerHTML =
    "<td>" + idSensor + "</td>" + "<td>" + descSensor + "</td>" 
    + "<td>" + "<button onClick='modificarSensor("+idSensor+","+idEstado+")'class='btn btn-primary'> Actualizar Descripcion </button>" + "</td>" 
    + "<td>" + idEstado + "</td>"
    + "<td>" + "<button onClick='modificarEstadoSensorAct("+idSensor+")'class='btn btn-primary' "+((idEstado==1)?"disabled":"")+"> Activar </button>" + "</td>"
    + "<td>" + "<button onClick='modificarEstadoSensorDes("+idSensor+")'class='btn btn-primary' "+((idEstado==2)?"disabled":"")+"> Desactivar </button>" + "</td>"
    + "<td>" + "<button onClick='modificarEstadoSensorRep("+idSensor+")'class='btn btn-primary' "+((idEstado==3)?"disabled":"")+"> Reparacion </button>" + "</td>";
  }
}
//Actualizar la descripcion del estado
function modificarSensor(idSensor, idEstado){
  var descripcionNew=prompt("digite la Descripcion del Sensor actualizado");
  const apiActualizarSensor = fetch(urlBase+"/Sensor/"+idSensor, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id_sensor': idSensor,
      'descripcion': descripcionNew,
      'id_estado': idEstado
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarSensor);

  Promise.all([apiActualizarSensor]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#SensorList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#SensorNew";
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
//funcion para cambiar el estado a activado
function modificarEstadoSensorAct(idSensor){
  //validar los datos ingresados

  const apiActualizarSensor = fetch(urlBase+"/Sensor/"+idSensor, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id_sensor': idSensor,
      'id_estado': 1
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarSensor);

  Promise.all([apiActualizarSensor]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#SensorList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estado Activado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#SensorList";
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
//funcion para cambiar el estado a inactivo
function modificarEstadoSensorDes(idSensor){
  //validar los datos ingresados
  const apiActualizarSensor = fetch(urlBase+"/Sensor/"+idSensor, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id_sensor': idSensor,
      'id_estado': 2
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarSensor);

  Promise.all([apiActualizarSensor]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#SensorList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estado Activado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#SensorNew";
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
//funcion para cambiar el estado a rearacion
function modificarEstadoSensorsRep(idSensor){
  //validar los datos ingresados
  const apiActualizarSensor = fetch(urlBase+"/Sensor/"+idSensor, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'id_sensor': idSensor,
      'id_estado': 3
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarSensor);

  Promise.all([apiActualizarSensor]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#SensorList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estado Activado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#SensorNew";
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