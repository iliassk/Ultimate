var contactNewComponent = {
  controller: ContactNewComponent,
  templateUrl: './contact-new.html'
};

function ContactNewComponent($state, ContactService) {
  'ngInject';

  var $ctrl = this;

  $ctrl.contact = {
    name: '',
    email: '',
    job: '',
    location: '',
    social: {
      facebook: '',
      twitter: '',
      github: '',
      linkedin: ''
    },
    tag: 'none'
  };

  function addContact(event) {
    return ContactService
      .createContact(event.contact)
      .then(function(response) {
        console.log(response);
        $state.go('edit', {id: response.key});
      });
  }
  $ctrl.addContact = addContact;
}

angular
  .module('components.contact')
  .config(function($stateProvider) {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'contactNew'
      })
  })
  .component('contactNew', contactNewComponent);
