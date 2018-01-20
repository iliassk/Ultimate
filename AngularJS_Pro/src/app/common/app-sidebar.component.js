var appSidebarComponent = {
  controller: appSidebarController,
  templateUrl: './app-sidebar.html'
};

function appSidebarController() {
  'ngInject';

  var $ctrl = this;

  $ctrl.contactTags = [{
    label: 'All contacts',
    icon: 'star',
    filterParam: {
      filter: 'none'
    }
  }, {
    label: 'Friends',
    icon: 'people',
    filterParam: {
      filter: 'friends'
    }
  }, {
    label: 'Family',
    icon: 'child_care',
    filterParam: {
      filter: 'family'
    }
  }, {
    label: 'Acquaintances',
    icon: 'accessibility',
    filterParam: {
      filter: 'acquaintances'
    }
  }, {
    label: 'Following',
    icon: 'remove_red_eye',
    filterParam: {
      filter: 'following'
    }
  }];
}

angular
  .module('common')
  .component('appSidebar', appSidebarComponent);
