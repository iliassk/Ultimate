var contactDetailComponent = {
  bindings: {
    contact: '<',
    onAdd: '&',
    onEdit: '&',
    onDelete: '&'
  },
  controller: ContactDetailController,
  templateUrl: './contact-detail.html'
};

function ContactDetailController() {
  'ngInject';

  var $ctrl = this;

  function $onInit () {
    $ctrl.isNewContact = !$ctrl.contact.$id;
  }

  function add() {
    $ctrl.onAdd({
      $event: {
        contact: $ctrl.contact
      }
    });
  }
  function edit() {
    if(!$ctrl.isNewContact) {
      $ctrl.onEdit({
        $event: {
          contact: $ctrl.contact
        }
      });
    }
  }
  function remove() {
    $ctrl.onDelete({
      $event: {
        contact: $ctrl.contact
      }
    });
  }

  $ctrl.$onInit = $onInit;
  $ctrl.add = add;
  $ctrl.edit = edit;
  $ctrl.remove = remove;

}

angular
  .module('components.contact')
  .component('contactDetail', contactDetailComponent);
