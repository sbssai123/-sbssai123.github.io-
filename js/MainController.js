app.controller('MainController', [ '$scope',
  function($scope) {
    $scope.sections = [
      { id: 'home', name: 'Home' },
      { id: 'about', name: 'About Me' },
      { id: 'contact', name: 'Contact' }
    ];
  }]);
