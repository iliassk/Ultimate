var appNavbarComponent = {
  bindings: {
    user: '<',
    onLogout: '&'
  },
  controller: AppNavbarController,
  templateUrl: './app-navbar.html'
};

function AppNavbarController() {
  'ngInject';

  var $ctrl = this;

  function logout() {
    $ctrl.onLogout();
  }

  $ctrl.logout = logout;

}

angular
  .module('common')
  .component('appNavbar', appNavbarComponent);
