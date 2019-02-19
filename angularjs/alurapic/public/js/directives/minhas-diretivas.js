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
});