var contactTagComponent = {
  bindings: {
    tag: '<',
    onChangeTag: '&'
  },
  controller: ContactTagController,
  templateUrl: './contact-tag.html'
};

function ContactTagController() {
  var $ctrl = this;

  function $onInit() {
    $ctrl.tags = ["friends", "family", "acquaintances", "following"];
  }

  function $onChanges(changes) {
    if(changes.tag) {
      $ctrl.tag = angular.copy($ctrl.tag);
    }
  }

  function changeTag(tag) {
    $ctrl.onChangeTag({
      $event: {
        tag: tag
      }
    });
  }

  $ctrl.$onInit = $onInit;
  $ctrl.$onChanges = $onChanges;
  $ctrl.changeTag = changeTag;
}

angular
  .module('components.contact')
  .component('contactTag', contactTagComponent);
