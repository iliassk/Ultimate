function ContactService(AuthService, $firebaseRef, $firebaseArray, $firebaseObject) {
  var self = this;
  self.ref = $firebaseRef.contacts;
  self.uid = AuthService.getUser().uid;

  return {
    createContact: function (contact) {
      return $firebaseArray(self.ref.child(self.uid)).$add(contact);
    },
    getContactById: function (id) {
      return $firebaseObject(self.ref.child(self.uid).child(id));
    },
    updateContact: function(contact) {
      return contact.$save();
    },
    deleteContact: function(contact) {
      return contact.$remove();
    }
  };
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService);
