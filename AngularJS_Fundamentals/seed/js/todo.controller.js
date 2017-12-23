function TodoController() {

  var $ctrl = this;
  $ctrl.tasksList = [
    {
      title: 'Complete Ultimate AngularJS Fundamentals',
      completed: false
    },
    {
      title: 'Complete Ultimate AngularJS Pro',
      completed: true
    },
    {
      title: 'Complete Ultimate AngularJS Performance',
      completed: false
    }
  ];

};

angular
  .module('app')
  .controller('TodoController', TodoController);
