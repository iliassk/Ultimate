function TodoController() {

  var $ctrl = this;
  $ctrl.newTodoTitle = '';
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

  function addTodo() {
    $ctrl.tasksList.unshift({
      title: $ctrl.newTodoTitle,
      completed: false
    });

    $ctrl.newTodoTitle = '';
  };

  function removeTodo(task, index) {
    $ctrl.tasksList.splice(index, 1);
  };

  $ctrl.addTodo = addTodo;
  $ctrl.removeTodo = removeTodo;

};

angular
  .module('app')
  .controller('TodoController', TodoController);
