angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('CedulaCtrl', function($scope, $cordovaBarcodeScanner, $ionicPopup, Cedula) {
  console.log("CedulaCtrl");

  $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(cedula) {
            Cedula.get({i_cedula: cedula.text}).$promise.then(function(data) {
                $state.go('app.ceduladetalle');
                $rootScope.cedula = Cedula.get({codigo: cedula.text});
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

.controller('PlaylistCtrl', function($scope) {
});
