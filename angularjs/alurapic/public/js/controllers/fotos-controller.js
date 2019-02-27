angular.module('alurapic').controller('FotosController', function($scope, $resource) {
    
    $scope.fotos = [];

    var recursoFoto = $resource('/v1/fotos/:fotoId');

    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    $scope.remover = function(foto) {
        recursoFoto.delete({fotoId: foto._id}, function(){
            $scope.mensagem = 'Foto ' + foto.titulo +' excluída';
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
        }, function(erro){
            $scope.mensagem = 'Ocorreu um erro';
        });
    }
});