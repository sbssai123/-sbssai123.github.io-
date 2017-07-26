app.directive('chartInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/chartInfo.html'
  };
});
