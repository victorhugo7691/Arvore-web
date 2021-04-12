angular.module("meuApp", []);

angular.module("meuApp").controller("appController", function($scope){
    $scope.app="meuApp";
    $scope.estado = "";
    $scope.btnSim = null;
    
    $scope.dispensado = function(){
        $scope.estado = "Dispensado";
        alert("Você não precisa de medicamento, está dispensado!");
    };
});