function crearSensor() {
  if(idRol=="1" && idEst == "1"){
    var descrip = document.getElementById("descripcion").value;
    var idEstado = parseInt(document.getElementById("idEstado").value, 10);
    if (descrip !== "" && idEstado !== "") {
      const apiCrearSensor = fetch(urlBase+"/Sensor/saveSensor", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_sensor:0,
          descripcion:descrip,
          id_estado:idEstado
        }) // body data type must match "Content-Type" header
      }).then((respuesta) => respuesta.json())
      Promise.all([apiCrearSensor]).then((datos) => {
        console.log(apiCrearSensor);
        if (datos[0].respuesta == 1 ){
          window.location.href ="#SensorList";
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Guardado',
            showConfirmButton: false,
            timer: 2000
          });
        }else{
          window.location.href ="#SensorNew";
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error al Guardar',
            showConfirmButton: false,
            timer: 2000
          });
        }    
      }).catch(
        miError=>{console.log(miError);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error de servidor',
            showConfirmButton: false,
            timer: 2000
          });
      });
    }
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
