function AuthService($firebaseAuth) {
  'ngInject';

  var self = this;

  self.firebaseAuth = $firebaseAuth();
  self.authData = null;

  function storeAuthData(response) {
    self.authData = response;
    return self.authData;
  }

  function removeAuthData() {
    self.authData = null;
  }

  function hasToLogin() {
    return self.firebaseAuth.$requireSignIn();
  }

  self.register = function(user) {
    return self.firebaseAuth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  };

  self.login = function(user) {
    return self.firebaseAuth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  };

  self.requireAuthentication = function(user) {
    return self.firebaseAuth
      .$waitForSignIn(user)
      .then(hasToLogin)
  };

  self.getUser = function() {
    return self.authData;
  };

  self.isAuthenticated = function() {
    return !!(self.authData);
  };

  self.logout = function() {
    return self.firebaseAuth
      .$signOut()
      .then(removeAuthData)
  };

}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
