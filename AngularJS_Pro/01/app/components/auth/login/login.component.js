var loginComponent = {
  controller: LoginController,
  templateUrl: './login.html'
};

function LoginController(AuthService) {
  var $ctrl = this;

  $ctrl.$onInit = function() {
    $ctrl.error = null;
    $ctrl.user = {
      email: '',
      password: ''
    };
  };

  $ctrl.loginUser = function(event) {
    AuthService.login(event.user)
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
  .config(function($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state('auth', {
        redirectTo: '/login',
        url: '/auth',
        templateUrl: '<div ui-view></div>'
      })
      .state('login', {
        url: '/login',
        component: 'login'
      });

    $urlRouteProvider.otherwise('/auth');
  })
  .component('login', loginComponent);
