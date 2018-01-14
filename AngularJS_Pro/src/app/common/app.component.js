var appComponent = {
  controller: AppController,
  templateUrl: './app.html'
};

function AppController(AuthService, $state) {
  'ngInject';

  var $ctrl = this;
  $ctrl.user = AuthService.getUser();

  function logoutUser() {
    AuthService.logout()
      .then(function() {
        $state.go('auth.login');
      });
  }

  $ctrl.logoutUser = logoutUser;
}

angular
  .module('common')
  .component('app', appComponent)
  .config(function($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        data: {
          requireAuth: true
        },
        component: 'app'
      })
  });
