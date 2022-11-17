function logicaNegocio(url, param) {
    switch (url) {
        case 'src/componentes/inicio.html':
            //
            break;
            //datos
        case 'src/componentes/datosEstacionM/datosEstacionMlistado.html':
            obtenerTodosDatosEM();
            verificarToken();
            break;
        case 'src/componentes/datosEstacionM/datosEstacionMGraficar.html':
            llenarSelecEstacionM();
            verificarToken();
            break;
            //roles
        case 'src/componentes/roles/rollistado.html':
            verificarToken();
            obtenerTodosRolesL();
            break;
        case 'src/componentes/roles/rolcrear.html':
            verificarEstdoRol();
            verificarToken();
            break;
        case 'src/componentes/roles/roladmin.html':
            verificarToken();
            obtenerTodosRolesActualizar();
            break;
            //usuarios
        case 'src/componentes/usuarios/usuarios.html':
            verificarToken();
            obtenerTodosUsuariosL();
            break;
        case 'src/componentes/usuarios/usuariosCrear.html':
            verificarEstdoRol();
            verificarToken();
            llenarSelecEstados();
            llenarSelecRoles();
            break;
        case 'src/componentes/usuarios/usuariosActualizar.html':
            verificarToken();
            obtenerTodosUsuariosActualizar();
            break;
            //estado
        case 'src/componentes/estado/estadolistado.html':
            verificarToken();
            obtenerTodosEstadosL();
            break;
        case 'src/componentes/estado/estadocrear.html':
            verificarEstdoRol();
            verificarToken();
            break;
        case 'src/componentes/estado/estadoadmin.html':
            verificarToken();
            obtenerTodosEstadosActualizar();
            break;
            //estacion meteorologica
        case 'src/componentes/nEstacionMeteorologica/estacionesMlistado.html':
            verificarToken();
            obtenerTodosEstadoL();
            break;
        case 'src/componentes/nEstacionMeteorologica/estacionesMcrear.html':
            verificarEstdoRol();
            verificarToken();
            break;
        case 'src/componentes/nEstacionMeteorologica/estacionesMadmin.html':
            verificarToken();
            obtenerTodasEstacionesMeteoActualizar();
            break;
            //sensor
        case 'src/componentes/sensor/sensorlistado.html':
            verificarToken();
            obtenerTodosSensorL();
            break;
        case 'src/componentes/sensor/sensorcrear.html':
            verificarEstdoRol();
            verificarToken();
            break;
        case 'src/componentes/sensor/sensoradmin.html':
            verificarToken();
            obtenerTodosSensoresActulizar();
            break;
            //observaciones
        case 'src/componentes/observaciones/observacioneslistado.html':
            verificarToken();
            obtenerTodosobservacionesL();
            break;
        case 'src/componentes/observaciones/observacionescrear.html':
            verificarEstdoRol();
            verificarToken();
            break;
        case 'src/componentes/observaciones/observacionesadmin.html':
            verificarToken();
            obtenerTodosobservacionesesActulizar();
            break;
            //login
        case 'src/componentes/acceso.html':
            verificarToken();
            break;
        case 'src/componentes/recuperacion.html':
            break;
        default:
            console.log('Javascript interno no utilizado');
    }
}
function verificarToken(){
    if(token == null) {
        document.getElementById("iniciarS").style.display="";
        document.getElementById("cerrarS").style.display="none";
        window.location.href ="#login";
    }else{
        document.getElementById("iniciarS").style.display="none";
        document.getElementById("cerrarS").style.display="";
    }
}

function verificarEstdoRol(){
    if(idRol=="1" && idEst == "1"){
        
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



