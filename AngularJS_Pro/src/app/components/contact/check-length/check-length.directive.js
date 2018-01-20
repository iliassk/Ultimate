function CheckLength() {
  return {
    restrict: 'A',
    require: 'ngModel',
    compile: function($element) {
      $element.addClass('dynamic-input');
      return function ($scope, $element, $attrs, $ctrl) {
        $scope.$watch(function () {
          return $ctrl.$viewValue;
        }, function (newValue) {
          if(newValue) {
            $element.removeClass('dynamic-input--no-contents');
          }
          else {
            $element.addClass('dynamic-input--no-contents');
          }
        });
      };
    }
  }

}

angular
  .module('components.contact')
  .directive('checkLength', CheckLength);
