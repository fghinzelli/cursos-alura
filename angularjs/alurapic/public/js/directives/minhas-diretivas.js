angular.module('minhasDiretivas', ['meusServicos'])
.directive('meuPainel', function() {
    var ddo = {
        restrict: 'AE',
        scope: {
            titulo: '@'
        },
        transclude : true,
        templateUrl: 'js/directives/meu-painel.html'
    };

    return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {
        restrict: 'E',
        scope: {
            url: '@',
            titulo: '@'
        },
        template: `<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">`
    }
    return ddo;
})
.directive('meuBotaoPerigo', function() {
    var ddo = {
        restrict: 'E',
        scope: {
            nome: '@',
            acao: '&'
        },
        template: '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>'
    }
    return ddo;
})
.directive('meuFocus', function() {
    var ddo = {
        restrict: 'A',
        link: function(scope, element) {
            scope.$on('fotoCadastrada', function(){
                element[0].focus();
            });
        }
    }
    return ddo;
})
.directive('meusTitulos', function() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
    ddo.controller = function($scope, recursoFoto) {
        recursoFoto.query(function(fotos) {
            $scope.titulos = fotos.map(function(foto) {
                return foto.titulo;
            });
        })
    };
    return ddo;
});