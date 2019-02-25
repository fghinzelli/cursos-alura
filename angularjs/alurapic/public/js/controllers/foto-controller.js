angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.fotoId = $routeParams.fotoId;
    $scope.mensagem = null;

    if ($scope.fotoId) {
        $http.get('/v1/fotos/' + $scope.fotoId)
        .success(function(dados) {
            $scope.foto = dados;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível carregar os dados';
        });
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            if ($scope.fotoId) {
                $http.put('/v1/fotos/' + $scope.fotoId, $scope.foto)
                .success(function() {
                    $scope.mensagem = "Foto " + $scope.foto.titulo + " alterada com sucesso";
                })
                .error(function(erro) {
                    $scope.mensagem = "Não foi possível alterar a foto";
                });
            } else {
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
        
    }
});