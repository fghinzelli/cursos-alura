angular.module('minhasDiretivas', [])
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
});