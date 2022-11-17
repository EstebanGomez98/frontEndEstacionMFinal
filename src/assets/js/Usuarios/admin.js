function obtenerTodosUsuariosActualizar() {
  if(idRol=="1" && idEst == "1"){
    const ListarUsuarios = fetch(urlBase+"/Usuario/listarUsuarios", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      },

    }).then((respuesta) => respuesta.json())
    Promise.all([ListarUsuarios]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaUsuarios").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      var g = b.insertCell(3);
      var h = b.insertCell(4);
      var i = b.insertCell(5);
      c.innerHTML="<b>Id Usuario</b>";
      d.innerHTML="<b>Nobre<b>";
      e.innerHTML="<b>Email<b>";
      g.innerHTML="<b>Rol<b>";
      h.innerHTML="<b>Actulizar Datos<b>";
      i.innerHTML="<b>Estado</b>"
      crearFilasUsuariosA(datos);
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
  
function crearFilasUsuariosA(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idUsu = arregloObjeto[i].id_usuario;
    const nomUsu = arregloObjeto[i].nombre;
    const emailUsu = arregloObjeto[i].email;
    const passUsu = arregloObjeto[i].pass;
    const rolUsu = arregloObjeto[i].id_rol;
    const estadoUsu = arregloObjeto[i].id_estado;
    document.getElementById("tablaUsuarios").insertRow(-1).innerHTML =
    "<td>" + idUsu + "</td>" + "<td>" + nomUsu + "</td>" + "<td>" 
    + emailUsu + "</td>" + "<td>" + rolUsu 
    + "</td>" + "<button onClick='modificarUsuario("+idUsu+","+estadoUsu+")'class='btn btn-primary'> Actualizar Datos</button>" + "</td>"
    + "<td>" + estadoUsu + "<td>"
    + "<td>" + "<button onClick='modificarEstadoUserAct("+idUsu+")'class='btn btn-primary' "+((estadoUsu==1)?"disabled":"")+"> Activar </button>" + "</td>"
    + "<td>" + "<button onClick='modificarEstadoUserDes("+idUsu+")'class='btn btn-primary' "+((estadoUsu==2)?"disabled":"")+"> Desactivar </button>" + "</td>";
  }
}

function modificarUsuario(idUsu, estadoUsu){
  var nombre=prompt("digite el nombre actualizado");
  var email=prompt("digite el correo actualizado");
  var idRol=prompt("digite el rol actualizado");
  var x = parseInt(idRol,10);
  //validar los datos ingresados
    const crearUser = fetch(urlBase+"/Usuario/"+idUsu, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      },
      body: JSON.stringify({
        "id_usuario": idUsu,
        "nombre": nombre,
        "email": email,
        "id_rol": x,
        "id_estado": estadoUsu
      }) // body data type must match "Content-Type" header
    }).then((respuesta) => respuesta.json())
    Promise.all([crearUser]).then((datos) => {
      if (datos[0].respuesta == 1 ){
        window.location.href ="#UserList";
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Actualizado',
          showConfirmButton: false,
          timer: 2000
        });
      }else{
        window.location.href ="#UserUpdate";
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error al actualizar',
          showConfirmButton: false,
          timer: 2000
        });
      }
  });
}

function modificarEstadoUserAct(idUsu){
  //validar los datos ingresados
  const apiActualizarUsuario = fetch(urlBase+"/Usuario/"+idUsu, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({
      'id_Usuario': idUsu,
      'id_estado': 1
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarUsuario);

  Promise.all([apiActualizarUsuario]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#UserList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estado Activado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#UserList";
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

function modificarEstadoUserDes(idUsu){
  //validar los datos ingresados
  const apiActualizarUsuario = fetch(urlBase+"/Usuario/"+idUsu, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({
      'id_Usuario': idUsu,
      'id_estado': 2
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarUsuario);

  Promise.all([apiActualizarUsuario]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#UserList";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Estado Activado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#UserList";
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