var contactsComponent = {
  bindings: {
    contacts: '<'
  },
  controller: ContactsController,
  templateUrl: './contacts.html'
};

function ContactsController($state) {
  'ngInject';

  var $ctrl = this;

  function getContact(event) {
    $state.go('edit', {id: event.contactId});
  }

  $ctrl.getContact = getContact;
}

angular
  .module('components.contact')
  .config(function($stateProvider) {
    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/contacts',
        component: 'contacts',
        resolve: {
          contacts: function(ContactService) {
            return ContactService.getAllContacts().$loaded();
          }
        }
      })
  })
  .component('contacts', contactsComponent);
