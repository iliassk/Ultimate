var contactCardComponent = {
  bindings: {
    contact: '<',
    onSelect: '&'
  },
  controller: ContactCardController,
  templateUrl: './contact-card.html'
};

function ContactCardController() {
  'ngInject';

  var $ctrl = this;

  function selectContact() {
    $ctrl.onSelect({
      $event: {
        contactId: $ctrl.contact.$id
      }
    });
  }

  $ctrl.selectContact = selectContact;
}

angular
  .module('components.contact')
  .component('contactCard', contactCardComponent);
