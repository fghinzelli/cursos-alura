angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams) {
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
            if ($scope.fotoId) {
                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
                    $scope.mensagem = "Foto " + $scope.foto.titulo + " alterada com sucesso";
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = "Não foi possível alterar a foto";
                });
            } else {
                recursoFoto.save($scope.foto, function(){
                    $scope.foto = {};
                    $scope.mensagem = 'Foto adicionada com sucesso'; 
                }, function(erro) {
                    console.error(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                });
            }
        }
        
    }
});