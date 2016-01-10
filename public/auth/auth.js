angular.module('Recipeoples.auth', [])


.controller('AuthController', function ($scope, $rootScope, $location, $window, AuthFactory) {
  $rootScope.currentUser = null;

  // Passes in the user to be authenticated, either as new or returning.
  $scope.submit = function() {
    AuthFactory.authenticate($scope.user, $scope.signup)
    .then(function (data) {
      $window.localStorage.setItem('com.recipeople', data.token);
      $rootScope.currentUser = data.user;
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

})


.factory('AuthFactory', function ($http, $location, $window) {

  //Sends an authentication query either as a new user, or returning.
  var authenticate = function(user, isNew) {
    var path = isNew ? 'signup' : 'signin';

    return $http({
      method: 'POST',
      url: '/api/users/' + path,
      data: user
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  // Checks whether or not a user has an authorization cookie.
  var isAuth = function() {
    return !!$window.localStorage.getItem('com.recipeople');
  };

  // Removes the authorization cookie.
  var signout = function() {
    $window.localStorage.removeItem('com.recipeople');
    $location.path('/signin');
  };

  return {
    authenticate: authenticate,
    isAuth: isAuth,
    signout: signout
  };

});