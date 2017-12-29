function MyAutoFocusDirective($timeout) {
  return {
    restrict: 'A',
    scope: false,
    link: function(scope, element, attrs) {
      scope.$watch(attrs.myAutoFocus, function(newValue, oldValue) {
        if(!newValue) {
          return;
        }
        //setTimeout (js) or $timeout (angularjs) do almost the same thing
        //they make sure to push the action element[0].focus(); at the end of the browser queue
        //this allows the browser to do all its tasks (rendering DOM, executing JS ...) beforehand
        //and after 0s, it executes its last task, the focus action
        $timeout(function() {
          element[0].focus();
        });
      });
    }
  }
}

angular
  .module('app')
  .directive('myAutoFocus', MyAutoFocusDirective);
