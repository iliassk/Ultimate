var registerComponent = {
  controller: RegisterController,
  templateUrl: './register.html'
};

function RegisterController(AuthService) {
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
        console.log("Success !");
      })
      .catch(function(reason) {
        $ctrl.error = reason.message;
      })
  };
}

angular
  .module('components.auth')
  .config(function($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        component: 'register'
      })
  })
  .component('register', registerComponent);
