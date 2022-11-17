function obtenerTodosRolesActualizar() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerRoles = "https://localhost:44368/api/Rol/listarRoles";
    const miPromesaRoles = fetch(apiObtenerRoles).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaRoles]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaRoles").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      c.innerHTML="<b>Id Rol</b>";
      d.innerHTML="<b>Descripcion<b>";
      e.innerHTML="<b>Actualizar</b>"
      crearFilasRolesA(datos);
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

function crearFilasRolesA(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idRol = arregloObjeto[i].id_rol;
    const descrip = arregloObjeto[i].descripcion;

    document.getElementById("tablaRoles").insertRow(-1).innerHTML =
    "<td>" + idRol + "</td>" + "<td>" + descrip + "</td>" 
    + "<td>" + "<button onClick='modificarRol("+idRol+")'class='btn btn-primary'> Actualizar </button>" + "</td>";
  }
}

function modificarRol(idRol){
  //window.location.href ="#EstadList";
  var rolNew=prompt("digite el rol actualizado");
  //validar los datos ingresados

  const apiActualizarEstacion = fetch(urlBase+"/Rol/"+idRol, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "id_rol": idRol,
      "descripcion": rolNew
    }) // body data type must match "Content-Type" header
  }).then((respuesta) => respuesta.json())
  //.then((data) => console.log(data.respuesta));
  console.log(apiActualizarEstacion);

  Promise.all([apiActualizarEstacion]).then((datos) => {
    if (datos[0].respuesta == 1 ){
      window.location.href ="#rollist";
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado',
        showConfirmButton: false,
        timer: 2000
      });
    }else{
      window.location.href ="#rollist";
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
};