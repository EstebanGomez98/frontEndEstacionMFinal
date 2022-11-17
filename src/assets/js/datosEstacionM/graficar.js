function obtenerTodosDatosEMGrficar() {
  if(idEst=="1"){
    let temperatura = [];
    var humedad = [];
    var velViento = [];
    var dirViento = [];
    var lluvia = [];
    let xFechaHora = [];
    var datos = [];
    const apiObtenerDatosEstacionMGrficar = urlBase+"/DatoEstacionMeteorologica/listarDatoEstacionM";
    const miPromesaDatosEstacionMGrficar = fetch(apiObtenerDatosEstacionMGrficar).then((respuesta) =>
      respuesta.json()
    );

    Promise.all([miPromesaDatosEstacionMGrficar]).then((arregloDatos) => {
      const selcdatos = arregloDatos[0];
      var a= document.getElementById("tablaDirViento").createTHead();
      var b = a.insertRow(0);
      var c = b.insertCell(0); 
      var d = b.insertCell(1);
      c.innerHTML="<b>HORA</b>";
      d.innerHTML="<b>DIRECCION<b>";
      //
      const cantidad = selcdatos.length;
      var idEstacionM = parseInt(document.getElementById("idDectEM").value, 10);
      for (let i = 0; i < cantidad; i++) {
        if(selcdatos[i].id_estacion_meteorologica == idEstacionM){
          datos.push(selcdatos[i]);
        }
        if(datos[i].id_sensor == 1){
          temperatura.push(datos[i].valor);
          xFechaHora.push(datos[i].fecha_hora);
        }else if(datos[i].id_sensor == 6){
          humedad.push(datos[i].valor);
        }else if(datos[i].id_sensor ==  3){
          velViento.push(datos[i].valor);
        }else if(datos[i].id_sensor == 4){
          dirViento.push(datos[i].valor);
        }else if(datos[i].id_sensor == 5){
          lluvia.push(datos[i].valor);
        }

      }
      ListarDatoEstacionMDirViento(dirViento, xFechaHora);
      new Chart("ChartTempHume", {
        type: "line",
        data: {
          labels: xFechaHora,
          datasets: [{ 
            label: "temperatura C°",
            data: temperatura,
            borderColor: "blue",
            fill: false
          },{ 
            label: "% humedad",
            data: humedad,
            borderColor: "red",
            fill: false
          }
        ]
        },
        options: {
          legend: {display: true},
        }
      });
      new Chart("ChartVelViento", {
        type: "line",
        data: {
          labels: xFechaHora,
          datasets: [{ 
            label: "Velocidad del viento Km/h",
            data: velViento,
            borderColor: "blue",
            fill: false
          }
        ]
        },
        options: {
          legend: {display: true},
        }
      });
      new Chart("Chartllubia", {
        type: "line",
        data: {
          labels: xFechaHora,
          datasets: [{ 
            label: "plubiometro",
            data: lluvia,
            borderColor: "blue",
            fill: false
          }
        ]
        },
        options: {
          legend: {display: true},
        }
      });
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

//direccion del viento
function ListarDatoEstacionMDirViento(arregloObjeto, xFechaHorab) {
  console.log(arregloObjeto);
  const cantidad = arregloObjeto.length;
  var valor = 0;
  var fechaHora= 0;
  for (let i = 0; i < cantidad; i++) {
    if(arregloObjeto[i]>3.83 && arregloObjeto[i]<3.87 ){valor="Norte 0° ";}
    if(arregloObjeto[i]>1.96 && arregloObjeto[i]<2.00 ){valor="NE 22.6°";}
    if(arregloObjeto[i]>2.24 && arregloObjeto[i]<2.28 ){valor="NE 45°";}
    if(arregloObjeto[i]>0.38 && arregloObjeto[i]<0.42 ){valor="NE 67.5°";}
    if(arregloObjeto[i]>0.42 && arregloObjeto[i]<0.46 ){valor="E 90°";}
    if(arregloObjeto[i]>0.29 && arregloObjeto[i]<0.33 ){valor="SE 112.5°";}
    if(arregloObjeto[i]>0.88 && arregloObjeto[i]<0.92 ){valor="SE 135°";}
    if(arregloObjeto[i]>0.59 && arregloObjeto[i]<0.63 ){valor="SE 157.5°";}
    if(arregloObjeto[i]>1.38 && arregloObjeto[i]<1.42 ){valor="S 180°";}
    if(arregloObjeto[i]>1.17 && arregloObjeto[i]<1.21 ){valor="SO 202.5°";}
    if(arregloObjeto[i]>3.07 && arregloObjeto[i]<3.11 ){valor="SO 225°";}
    if(arregloObjeto[i]>2.92 && arregloObjeto[i]<2.96 ){valor="SO 247.5°";}
    if(arregloObjeto[i]>4.60 && arregloObjeto[i]<4.64 ){valor="O 270°";}
    if(arregloObjeto[i]>4.03 && arregloObjeto[i]<4.07 ){valor="NO 292.5°";}
    if(arregloObjeto[i]>4.32 && arregloObjeto[i]<4.36 ){valor="NO 315°";}
    if(arregloObjeto[i]>3.43 && arregloObjeto[i]<3.47 ){valor="NO 337.5°";}
    fechaHora = xFechaHorab[i];

    document.getElementById("tablaDirViento").insertRow(-1).innerHTML =
    "<td>" + fechaHora + "</td>"+"<td>" + valor + "</td>";
  }
}

function llenarSelecEstacionM(){
  const ListarEstacionM = fetch(urlBase+"/NEstacionMeteorologica/listarEstacionM", {//listar modificarEstacionMensorAct
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then((respuesta) => respuesta.json())
  console.log(ListarEstacionM);
  Promise.all([ListarEstacionM]).then((arregloDatos) => {
    const datos = arregloDatos[0];
    var html = llenarSEstacionM(datos);
    document.getElementById("selecEstacionM").innerHTML = html;
  });
}

function llenarSEstacionM(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  var text = "<select name=\"EstacionM\" id=\"idDectEM\"><option value=\"Seleccione\">...Seleccione...</option>";
  for (let i = 0; i < cantidad; i++) {
    const idEstacionM = arregloObjeto[i].id_estacion_meteorologica;
    const nombre = arregloObjeto[i].nombre;
    text += "<option value='"+idEstacionM+"'>"+nombre+"</option>";
  }
  text += "</select>";
  return text;
}