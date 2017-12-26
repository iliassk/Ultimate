function MyTodoAppDirective() {
  return {
    restrict: 'E',
    scope: {},
    controller: "TodoController as $ctrl",
    template: `
      <div class="todo">
      <form class="todo__form" ng-submit="$ctrl.addTodo()">
        <input placeholder="Enter a new task !" type="text" ng-model="$ctrl.newTodoTitle" />
      </form>
      <ul class="todo__list">
        <li class="todo__list" id="{{$index}}" ng-repeat="task in $ctrl.tasksList track by $index">
          <input id="todo-{{$index}}" type="checkbox"
                 ng-model="task.completed"
                 ng-change="$ctrl.toggleTask(task)">
          <label class="toggle" for="todo-{{$index}}"></label>
          <p ng-dblclick="editTodo = true;" ng-hide="editTodo">
            {{ task.title }}
          </p>
          <input ng-show="editTodo" type="text"
                 ng-model="task.title"
                 ng-blur="$ctrl.editTodo(task, $index); editTodo = false;"
                 my-auto-focus="editTodo" />
          <a href="" ng-click="$ctrl.removeTodo(task, $index)">
            &#215
          </a>
        </li>
      </ul>
      <p class="todo__remaining">
        <span ng-show="$ctrl.getRemainingTodos().length > 0">
          You have {{$ctrl.getRemainingTodos().length}} of {{$ctrl.tasksList.length}} remaining todo tasks
        </span>
        <span ng-show="$ctrl.getRemainingTodos().length === 0">
          You are super productive !
        </span>
      </p>
    </div>
    `
  }

}

angular
  .module('app')
  .directive('myTodoApp', MyTodoAppDirective);
