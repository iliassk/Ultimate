function AuthService($firebaseAuth) {
  var self = this;

  self.firebaseAuth = $firebaseAuth();
  self.authData = null;

  function storeAuthData(response) {
    self.authData = response;
    return self.authData;
  }

  self.register = function(user) {
    self.firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  };

  self.login = function(user) {
    self.firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData)
  };

}

angular
  .module('components.auth')
  .service('AuthService', AuthService)
