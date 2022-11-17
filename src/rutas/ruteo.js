'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'inicio.html', true),
            //DatoEstacionMeteorologica
            new Route('datosEMlist', 'datosEstacionM/datosEstacionMlistado.html'),
            new Route('datosEMgraf', 'datosEstacionM/datosEstacionMGraficar.html'),
            //roles
            new Route('rollist', 'roles/rollistado.html'),
            new Route('roladd', 'roles/rolcrear.html'),
            new Route('rolmanage', 'roles/roladmin.html'),
            //usuarios
            new Route('UserUpdate', 'usuarios/usuariosActualizar.html'),
            new Route('UserNew', 'usuarios/usuariosCrear.html'),
            new Route('UserList', 'usuarios/usuarios.html'),
            //estados
            new Route('EstadList', 'estado/estadolistado.html'),
            new Route('EstadNew', 'estado/estadocrear.html'),
            new Route('EstadUpdate', 'estado/estadoadmin.html'),
            //EstacionMeteorologica
            new Route('EstacionMList', 'nEstacionMeteorologica/estacionesMlistado.html'),
            new Route('EstacionMNew', 'nEstacionMeteorologica/estacionesMcrear.html'),
            new Route('EstacionMUpdate', 'nEstacionMeteorologica/estacionesMadmin.html'),
            //Sensores
            new Route('SensorList', 'sensor/sensorlistado.html'),
            new Route('SensorNew', 'sensor/sensorcrear.html'),
            new Route('SensorUpdate', 'sensor/sensoradmin.html'),
            //observaciones
            new Route('observacionesList', 'observaciones/observacioneslistado.html'),
            new Route('observacionesNew', 'observaciones/observacionescrear.html'),
            new Route('observacionesUpdate', 'observaciones/observacionesadmin.html'),
            //LOGIN
            new Route('login', 'acceso.html'),
            //recuperacion de Pass
            new Route('recuPass', 'recuperacion.html'),
            //home
            new Route('home', 'inicio.html')
        ]);
    }
    init();
}());
