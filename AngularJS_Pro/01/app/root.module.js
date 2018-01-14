angular
  .module('root', [
    'common',
    'components',
    'templates'
  ])
  .config(function ($firebaseRefProvider) {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDctukgHYPeodTzgXJSh4f3mP3ah_K7Vgk",
      authDomain: "contacts-manager-511b0.firebaseapp.com",
      databaseURL: "https://contacts-manager-511b0.firebaseio.com",
      projectId: "contacts-manager-511b0",
      storageBucket: "contacts-manager-511b0.appspot.com",
      messagingSenderId: "660567810164"
    }
    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });
    firebase.initializeApp(config);
  });n
