app.controller('MainController', [ '$scope',
  function($scope) {
    $scope.charts = [
      {
        id: "java-chart",
        name: 'Java',
        percentage: '80%'
      },
      {
        id: "python-chart",
        name: 'Python',
        percentage: '90%'
      },
      {
        id: "js-chart",
        name: 'Javascript',
        percentage: '50%'
      },
      {
        id: "sql-chart",
        name:'SQL',
        percentage: '60%'
      },
      {
        id: "html-chart",
        name: "HTML & CSS",
        percentage: '80%'
      }
    ];
    $scope.sections = [
      {
        id: 'home',
        name: 'Home'
      },
      {
        id: 'about',
        name: 'About Me'
      },
      {
        id: 'skills',
        name: 'Skills'
      },
      {
        id: 'experience',
        name: 'Experience'
      },
      {
        id: 'resume',
        name: 'Resume'
      },
      {
        id: 'projects',
        name: 'Projects'
      },
      {
        id: 'cotact',
        name: 'Contact'
      }
    ];
  }]);
