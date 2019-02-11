angular.module('minhasDiretivas', []).directive('meuPainel', function() {
    var ddo = {
        restrict: 'AE',
        scope: {
            titulo: '@'
        },
        transclude : true,
        templateUrl: 'js/directives/meu-painel.html'
    };

    return ddo;
});