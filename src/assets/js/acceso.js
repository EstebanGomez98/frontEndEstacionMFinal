

function loginDelSistema() {
  
    const emailL = document.getElementById("email").value;
    const passL = document.getElementById("pass").value;
    if (emailL !== "" && passL !== "") {
      //esto es un json
      const Logeo = fetch(urlBase+"/Authentication/requestToken", {
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
          'email': emailL,
          'pass': passL,
        }) // body data type must match "Content-Type" header
      }).then((respuesta) => respuesta.json())
      console.log(Logeo);
      Promise.all([Logeo]).then((datos) => {
        console.log(datos);
        console.log(datos[0].respuesta);
        if (datos[0].respuesta == 1 ){
          token = datos[0].token;
          idRol = datos[0].mensaje;
          idEst = datos[0].estado;
          console.log(token+"--->AQUI ESTA EL ROL--->"+idRol+"--->AQUI ESTA EL ESTADO--->"+idEst);
          window.location.href ="#home";
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 2000
          });
        }else{
          window.location.href ="#login";
          token = null;
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error al inicia sesion',
            showConfirmButton: false,
            timer: 2000
          });
        }
      }).catch(Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error en el servidor',
        showConfirmButton: false,
        timer: 2000
      }));
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error al inicia sesion',
        showConfirmButton: false,
        timer: 2000
      });
    }
  }
  function cerrarSesion(){
    token = null;
    window.location.href ="#login";
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Te esperamos pronto',
      showConfirmButton: false,
      timer: 2000
    });
  }
  