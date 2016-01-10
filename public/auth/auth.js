angular.module('Recipeoples.auth', [])


.controller('AuthController', function ($scope, $rootScope, $location, $window, AuthFactory) {
  $rootScope.currentUser = null;

  // Passes in the user to be authenticated, either as new or returning.
  $scope.submit = function() {
    AuthFactory.authenticate($scope.user, $scope.signup)
    .then(function (token) {
      $window.localStorage.setItem('com.recipeople', token);
      $rootScope.currentUser = token.user;
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

})


.factory('AuthFactory', function ($http, $location, $window) {

  //Sends an authentication query either as a new user, or returning.
  var authenticate = function(user, signup) {
    var path = signup ? 'signup' : 'signin';

    return $http({
      method: 'POST',
      url: '/api/users/' + path,
      data: user
    })
    .then(function(resp) {
      return resp.data.token;
    });
  };

  var isAuth = function() {
    return !!$window.localStorage.getItem('com.recipeople');
  };

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