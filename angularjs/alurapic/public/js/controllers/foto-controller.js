angular.module('alurapic').controller('FotoController', function($scope, $http) {
    $scope.foto = {};

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            $http.post('/v1/fotos', $scope.foto)
            .success(function(){
                $scope.foto = {};
                $scope.mensagem = 'Foto adicionada com sucesso'; 
            }).error(function(erro) {
                console.error(erro);
                $scope.mensagem = 'Não foi possível cadastrar a foto';
            });
        }
        
    }
});