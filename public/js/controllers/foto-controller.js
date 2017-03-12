angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams, cadastroDeFotos, $mdToast){
  if($routeParams.fotoId) {
    recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
      $scope.foto = foto;
    }, function(erro) {
      console.log(erro);
      $mdToast.showSimple('Não foi possível obter a foto');
    });
  }
  $scope.submeter = function(){
    if($scope.formulario.$valid) {
      cadastroDeFotos.cadastrar($scope.foto)
      .then(function(dados) {
        $mdToast.showSimple(dados.mensagem);
        if (dados.inclusao) {
          $scope.foto = {};
          $scope.formulario.$setPristine();
          $scope.formulario.$setUntouched();
        }
      })
      .catch(function(erro) {
        $mdToast.showSimple(erro.mensagem);
      });
    }
  }
});
