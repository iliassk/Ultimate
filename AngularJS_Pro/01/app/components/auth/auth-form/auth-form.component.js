var authFormComponent = {
  bindings: {
    user: '<',
    error: '@',
    button: '@',
    onSubmit: '&'
  },
  controller: AuthFormController,
  templateUrl: './auth-form.html'
};

function AuthFormController() {

  var $ctrl = this;

  $ctrl.$onChanges = function(changes) {
    if(changes.user) {
      $ctrl.user = angular.copy($ctrl.user);
    }
  }

  $ctrl.submitForm = function() {
    $ctrl.onSubmit({
      $event: {
        user: $ctrl.user
      }
    });
  }
}

angular
  .module('components.auth')
  .component('auth-form', authFormComponent);
