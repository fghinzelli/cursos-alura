angular.module('alurapic').controller('GruposController', function($scope, $http){

    $scope.grupos = [];
    
    $http.get('/v1/grupos')
    .success(function(dados) {
        $scope.grupos = dados;
    })
    .error(function(erro){
        console.log(erro);
    });

});