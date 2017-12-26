function TodoController(TodoService) {

  var $ctrl = this;
  $ctrl.newTodoTitle = '';
  $ctrl.tasksList = [];

  function getTodos() {
    TodoService
      .retrieve()
      .then(function(response) {
        $ctrl.tasksList = response;
      });
  }

  function addTodo() {
    if(!$ctrl.newTodoTitle) {
      return;
    }
    TodoService
      .create({
        title: $ctrl.newTodoTitle,
        completed: false
      })
      .then(function(response) {
        $ctrl.tasksList.unshift(response);
        $ctrl.newTodoTitle = '';
      });
  }

  function editTodo(task, index) {
    if(!task.title) {
      $ctrl.removeTodo(task, index);
      return;
    }
    TodoService
      .update(task)
  }

  function toggleTask(task) {
    TodoService
      .update(task)
      .then(function(response) {
      })
      .catch(function(response) {
        task.completed = !task.completed;
      });
  }

  function removeTodo(task, index) {
    TodoService
      .remove(task)
      .then(function(response) {
        $ctrl.tasksList.splice(index, 1);
      });
  }

  function getRemainingTodos() {
    return $ctrl.tasksList.filter(function(todo) {
      return !todo.completed;
    });
  }

  $ctrl.addTodo = addTodo;
  $ctrl.editTodo = editTodo;
  $ctrl.toggleTask = toggleTask;
  $ctrl.removeTodo = removeTodo;
  $ctrl.getRemainingTodos = getRemainingTodos;

  getTodos();

};

angular
  .module('app')
  .controller('TodoController', TodoController);
