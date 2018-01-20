var contactsComponent = {
  bindings: {
    contacts: '<',
    filter: '@'
  },
  controller: ContactsController,
  templateUrl: './contacts.html'
};

function ContactsController($filter, $state) {
  'ngInject';

  var $ctrl = this;

  function $onInit() {
    $ctrl.copyContacts = angular.copy($ctrl.contacts);
    $ctrl.filteredContacts = $filter('ContactsTagFilter')($ctrl.copyContacts, $ctrl.filter)
  }


  function getContact(event) {
    $state.go('edit', {id: event.contactId});
  }

  $ctrl.getContact = getContact;
  $ctrl.$onInit = $onInit;

}

angular
  .module('components.contact')
  .config(function($stateProvider) {
    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/contacts?filter',
        param: {
          filter: 'none'
        },
        component: 'contacts',
        resolve: {
          contacts: function(ContactService) {
            return ContactService.getAllContacts().$loaded();
          },
          filter: function($transition$) {
            return $transition$.params().filter;
          }
        }
      })
  })
  .component('contacts', contactsComponent);
