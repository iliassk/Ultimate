var registerComponent = {
  controller: RegisterController,
  templateUrl: './register.html'
};

function RegisterController(AuthService, $state) {
  'ngInject';

  var $ctrl = this;

  $ctrl.$onInit = function() {
    $ctrl.error = null;
    $ctrl.user = {
      email: '',
      password: ''
    };
  };

  $ctrl.registerUser = function(event) {
    AuthService.register(event.user)
      .then(function() {
        $ctrl.error = null;
        $state.go('app');
      })
      .catch(function(reason) {
        $ctrl.error = reason.message;
      })
  };
}

angular
  .module('components.auth')
  .config(function($stateProvider) {
    'ngInject';

    $stateProvider
      .state('auth.register', {
        url: '/register',
        component: 'register'
      })
  })
  .component('register', registerComponent)

