angular.module('alurapic').controller('FotosController', function($scope, $http) {
    
    $scope.fotos = [];

    $http.get('/v1/fotos')
    .success(function(data) {
        $scope.fotos = data;
    })
    .error(function(erro) {
        console.error(erro);
    });

    $scope.remover = function(foto) {
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {
            $scope.mensagem = 'Foto excluida';
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
        })
        .error(function(erro) {
            $scope.mensagem = 'Ocorreu um erro';
        })

    }
    

});