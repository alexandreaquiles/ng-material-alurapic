angular.module('alurapic', ['ngRoute', 'meusServicos', 'ngMaterial', 'ngMessages'])
  .config(function($routeProvider, $locationProvider, $mdIconProvider) {

    $mdIconProvider
      .icon('editar',"/img/ic_edit.svg", 24)
      .icon('remover', "/img/ic_delete.svg", 24)
      .icon('filtrar', '/img/ic_search.svg', 24)
      .icon('fechar', '/img/ic_close.svg', 24)
      .icon('adicionar', '/img/ic_add.svg', 24);

    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    });
    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });
    $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });
    $routeProvider.otherwise({redirectTo: '/fotos'});
  });