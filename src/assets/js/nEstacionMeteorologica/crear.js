function crearEstacionM() {
  if(idRol=="1" && idEst == "1"){
    const nomb = document.getElementById("nombre").value;
    if (nomb !== "") {
      //esto es un json
      let objetoEnviar = {
        id_estacion_meteorologica:0,
        nombre: nomb
      }
      const apiCrear = urlBase+"/NEstacionMeteorologica/saveEstacionM";
      fetch(apiCrear,{
          method:"POST",
          body:JSON.stringify(objetoEnviar),
          headers:{"Content-type":"application/json; chasert=UTF-8"}
      })
      .then(respuesta=>{
        respuesta.json();
        console.log(respuesta);
        if(respuesta.status==201){//reparar
          window.location.href ="#EstacionMList";
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Creado',
            showConfirmButton: false,
            timer: 2000
          });
        }else{
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
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error debe llenar el campo',
        showConfirmButton: false,
        timer: 2000
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
