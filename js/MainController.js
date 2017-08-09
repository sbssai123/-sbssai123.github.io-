app.controller('MainController', [ '$scope',
  function($scope) {
    $scope.charts = [
      { id: "java-chart", name: 'Java', percentage: '80%' },
      { id: "python-chart", name: 'Python', percentage: '90%' },
      { id: "js-chart", name: 'Javascript', percentage: '50%' },
      {id: "sql-chart", name:'SQL', percentage: '60%' },
      {id: "html-chart", name: "HTML & CSS", percentage: '80%' }
    ];
    $scope.sections = [
      { id: 'home', name: 'Home' },
      { id: 'about', name: 'About Me' },
      { id: 'skills', name: 'Skills' },
      { id: 'experience', name: 'Experience' },
      { id: 'resume', name: 'Resume' },
      { id: 'projects', name: 'Projects' },
      { id: 'contact', name: 'Contact' }
    ];
    $scope.techskills = [
      { title: 'Tools', techlist: ['Git/Github', 'MySQL', 'Android Studio', 'MongoDB'], size: 3},
      { title: 'Libraries / Frameworks', techlist: ['Angular.js','jQuery', 'Natural Language Toolkit(NLTK)',
      'scikit-learn (ML in Python)', 'Stanford Core NLP', 'Bootstrap'], size: 5},
      { title: 'Other Software', techlist: ['Photoshop', 'Illustrator', 'InDesign'], size: 3}
    ];
  }]);
