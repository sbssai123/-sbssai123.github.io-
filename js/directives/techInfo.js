app.directive('techInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/techInfo.html'
  };
});
