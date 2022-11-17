function obtenerTodosRolesL() {
  if(idRol=="1" && idEst == "1"){
    const apiObtenerRoles = urlBase+"/Rol/listarRoles";
    const miPromesaRoles = fetch(apiObtenerRoles).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaRoles]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaRoles").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      c.innerHTML="<b>Id Rol</b>";
      d.innerHTML="<b>Descripcion<b>";

      crearFilasRolesL(datos);
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

function crearFilasRolesL(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const idRol = arregloObjeto[i].id_rol;
    const descRol = arregloObjeto[i].descripcion;

    document.getElementById("tablaRoles").insertRow(-1).innerHTML =
      "<td>" + idRol + "</td>" + "<td>" + descRol + "</td>";
  }
}
