var loginComponent = {
  controller: LoginController,
  templateUrl: './login.html'
};

function LoginController(AuthService, $state) {
  'ngInject';

  var $ctrl = this;

  $ctrl.$onInit = function() {
    $ctrl.error = null;
    $ctrl.user = {
      email: '',
      password: ''
    };
  };

  $ctrl.loginUser = function(event) {
    return AuthService.login(event.user)
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
  .component('login', loginComponent)
  .config(function($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('auth', {
        redirectTo: 'auth.login',
        url: '/auth',
        template: '<div ui-view></div>'
      })
      .state('auth.login', {
        url: '^/login',
        component: 'login'
      });

    $urlRouterProvider.otherwise('/login');
  });
