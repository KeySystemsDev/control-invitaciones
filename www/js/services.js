angular.module('starter.services', [])

.factory("Cedula", function ($resource) {
    return $resource("http://keysystemsca.com.ve/app/control-cedulas/cedula.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("Aprobar", function ($resource) {
    return $resource("http://keysystemsca.com.ve/app/control-cedulas/asistencia.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { query: { method: "GET", isArray: false }
    })
});
