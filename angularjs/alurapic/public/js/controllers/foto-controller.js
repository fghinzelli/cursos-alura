angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {
    $scope.foto = {};
    $scope.fotoId = $routeParams.fotoId;
    $scope.mensagem = null;

    if ($scope.fotoId) {
        recursoFoto.get({fotoId: $scope.fotoId}, function(dados){
            $scope.foto = dados;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível carregar os dados';
        });
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
                //$scope.focado = true;
            })
            .catch(function(erro) {
                $scope.mensagem = dados.mensagem;
            });
        }
    }
});