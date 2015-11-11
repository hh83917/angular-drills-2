angular.module('myApp').directive('myDirective', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
    },
    controller: function($scope) {
      $scope.edit = true;
    },
    scope: {
      theBiz: '=',
      changeBiz: '&',
    },
    templateUrl: 'directiveTmpl.html'
  };
});
