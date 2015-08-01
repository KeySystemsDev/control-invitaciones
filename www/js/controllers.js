angular.module('starter.controllers', [])

.controller('CedulaManualCtrl', function($scope, $state, $rootScope, $ionicPopup, Cedula) {
    console.log("CedulaManualCtrl");
    $scope.formData = {};

    $scope.siguiente = function(formData){
        Cedula.get({i_cedula: formData.i_cedula}).$promise.then(function(data) {
            if (data[0].asistencia_usuario == 0){
                $state.go('app.cedulamanualdetalle');
                $scope.formData = {};
                $rootScope.cedulamanual = Cedula.get({i_cedula: formData.i_cedula});
            }

            else{
                $ionicPopup.alert({ title:    'Mensaje de Error',
                                    template: 'Cedula Asociada'});
                $scope.formData = {};
            }
                   
                
            }, function(error) {
                $ionicPopup.alert({ title:    'Mensaje de Error',
                                    template: 'Existe un Error en el Ticket porfavor verifique el Número.'});
            });
    }
})

.controller('CedulaManualDetalleCtrl', function($scope, $state,$ionicHistory, $rootScope, $ionicPopup, Aprobar) {
    console.log("CedulaManualDetalleCtrl");

    $scope.aprobar = function(cedula){
        Aprobar.query({dato: cedula}).$promise.then(function(data) {
            
            $ionicPopup.alert({ title:    'Mensaje de Exito',
                                template: 'Invitado asociado correctamente cedula : ' + cedula});
            
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            
            $state.go('app.cedulamanual');
            
        }, function(error) {
            // error hand
            console.log(error);
            $ionicPopup.alert({ title:    'Mensaje de Error',
                                template: 'Ocurrio un error al Aprobar el Invitado'});
        });        
    
    }
})


.controller('CedulaCtrl', function($scope, $state, $rootScope, $cordovaBarcodeScanner, $ionicPopup, Cedula) {
    console.log("CedulaCtrl");

    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(result) {
            Cedula.get({i_cedula: result.text}).$promise.then(function(data) {
                if (data[0].asistencia_usuario == 0){
                    $state.go('app.ceduladetalle');
                    $rootScope.cedula = Cedula.get({i_cedula: result.text});
                }
                else{
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                    template: 'Cedula Asociada'});
                }
                }, function(error) {
                    // error hand
                    console.log(error);
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'Existe un Error en la Cedula porfavor verifique el Número.'});
                });

        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

})

.controller('CedulaDetalleCtrl', function($scope, $ionicPopup, $ionicHistory, $state, Aprobar) {
    console.log("CedulaDetalleCtrl");

    $scope.aprobar = function(cedula){
        Aprobar.query({dato: cedula}).$promise.then(function(data) {
            
            $ionicPopup.alert({ title:    'Mensaje de Exito',
                                template: 'Invitado asociado correctamente cedula : ' + cedula});
            
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            
            $state.go('app.cedula');
            
        }, function(error) {
            // error hand
            console.log(error);
            $ionicPopup.alert({ title:    'Mensaje de Error',
                                template: 'Ocurrio un error al Aprobar el Invitado'});
        });        
    
    }

});
