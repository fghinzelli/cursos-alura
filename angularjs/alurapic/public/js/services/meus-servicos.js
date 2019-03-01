angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function($resource) {    
        return $resource('/v1/fotos/:fotoId', null, {
            'update': {
                method: 'PUT'
            }
        });
    })

    .factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {
        var service = {};
        var evento = 'fotoCadastrada';
        service.cadastrar = function(foto) {
            return $q(function(resolve, reject){
                if(foto._id) {
                    recursoFoto.update({fotoId: foto._id}, foto, function(){
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: "Foto " + foto.titulo + " atualizada com sucesso",
                            inclusao: false
                        });
                    }, function(error) {
                        reject({
                            mensagem: "Não foi possível atualizar a foto"
                        })
                    });
                } else {
                    recursoFoto.save(foto, function(){
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: "Foto " + foto.titulo + " incluída com sucesso",
                            inclusao: true
                        })
                    }, function(error){
                        reject({
                            mensagem: "Não foi possível alterar a foto"
                        })
                    });
                }
            });
        };
        return service;
    });
