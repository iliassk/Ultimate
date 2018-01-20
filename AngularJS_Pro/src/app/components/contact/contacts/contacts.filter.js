function ContactsTagFilter() {
  'ngInject';

  return function (contacts, filter) {
    return contacts.filter(function (contact) {
      return contact.tag === ( (filter === "none" || !filter) ? contact.tag : filter );
    });
  }
}

angular
  .module('components.contact')
  .filter('ContactsTagFilter', ContactsTagFilter);
