function obtenerTodosUsuariosL() {
  if(idRol=="1" && idEst == "1"){
    const ListarUsuariosl = fetch(urlBase+"/Usuario/listarUsuarios", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      },

    }).then((respuesta) => respuesta.json())
    console.log(ListarUsuariosl);
    Promise.all([ListarUsuariosl]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      var a= document.getElementById("tablaUsuarios").createTHead();
      var b = a.insertRow(0);
      var c= b.insertCell(0); 
      var d= b.insertCell(1);
      var e = b.insertCell(2);
      var f = b.insertCell(3);
      var g = b.insertCell(4);;
      var h = b.insertCell(5);
      c.innerHTML="<b>Id Usuario</b>";
      d.innerHTML="<b>Nobre<b>";
      e.innerHTML="<b>Email<b>";
      f.innerHTML="<b>Contraseña<b>";
      g.innerHTML="<b>Rol<b>";
      h.innerHTML="<b>Estado<b>";
      crearFilasUsuarios(datos);
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

function crearFilasUsuarios(arregloObjeto) {
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
      + emailUsu + "</td>"+ "<td>" + passUsu + "</td>" + "<td>" + rolUsu + "</td>"
      + "<td>" + estadoUsu + "</td>";
  }
}

