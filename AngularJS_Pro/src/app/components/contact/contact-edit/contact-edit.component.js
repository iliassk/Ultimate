var contactEditComponent = {
  bindings: {
    contact: '<'
  },
  controller: ContactEditComponent,
  templateUrl: './contact-edit.html'
};

function ContactEditComponent($state, $window, ContactService, cfpLoadingBar) {
  'ngInject';

  var $ctrl = this;

  function editContact(event) {
    cfpLoadingBar.start();
    ContactService
      .updateContact(event.contact)
      .then(function () {
        cfpLoadingBar.complete();
      })
      .catch(function () {
        cfpLoadingBar.complete();
      });
  }
  function removeContact(event) {
    if($window.confirm('Do you want to delete ' + event.contact.name + ' from your contacts ?')) {
      ContactService
        .deleteContact(event.contact)
        .then(function () {
          $state.go('contacts', {
            filter: 'none'
          });
        })
    }
  }

  $ctrl.editContact = editContact;
  $ctrl.removeContact = removeContact;
}

angular
  .module('components.contact')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit', {
        parent: 'app',
        url: '/contact/:id',
        component: 'contactEdit',
        resolve: {
          contact: function (ContactService, $transition$) {
            var key = $transition$.params().id;
            return ContactService.getContactById(key).$loaded();
          }
        }
      });
  })
  .component('contactEdit', contactEditComponent);
