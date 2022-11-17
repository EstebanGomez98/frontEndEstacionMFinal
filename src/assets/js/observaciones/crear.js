function crearObservaciones() {
  if(idEst =="1" && idEst == "1"){
    var idUsuario =parseInt(document.getElementById("idUsuario").value, 10);
    var fecha = document.getElementById("fecha").value;
    var descrip = document.getElementById("descripcion").value;
    if (descrip !== "") {
      //esto es un json
      let objetoEnviar = {
        'id_Observacion':0,
        'id_usuario':idUsuario,
        'fecha':fecha,
        'descripcion': descrip
      }
      const apiCrear = urlBase+"/Observacion/saveObservacion";
      fetch(apiCrear,{
          method:"POST",
          body:JSON.stringify(objetoEnviar),
          headers:{"Content-type":"application/json; chasert=UTF-8"}
      })
      .then(respuesta=>{
        respuesta.json();
        console.log(respuesta);
        if(respuesta.status==201){//reparar
          window.location.href ="#observacionesList"
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Creado',
            showConfirmButton: false,
            timer: 2000
          });
        }else{
          window.location.href ="#observacionesNew"
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error al guardar',
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
      .catch(
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
