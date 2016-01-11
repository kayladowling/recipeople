angular.module('Recipeoples.auth', [])


.controller('AuthController', function ($scope, $rootScope, $location, $window, AuthFactory) {
  // Hacky way to logout. Whenever you navigate to the signin page,
  // the currentUser and your cookie are deleted.
  $rootScope.currentUser = null;
  $window.localStorage.removeItem('com.recipeople');


  // Passes in the user to be authenticated, either as new or returning.
  $scope.submit = function() {
    AuthFactory.authenticate($scope.user, $scope.signup)
    .then(function (data) {
      $window.localStorage.setItem('com.recipeople', data.token);
      $rootScope.currentUser = data.user;
      console.log('Set user', $rootScope.currentUser.username);
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

  // TODO: Delete once server-side authentication ready.
  // var authenticate = function(user, isNew) {
  //   console.log('Creating dummy token for user', user.username);
  //   return $http({
  //     method: 'GET',
  //     url: '/',
  //     data: {}
  //   })
  //   .then(function(resp) {
  //     console.log('returning dummy token and user');
  //     return {
  //       token: 'iamatoken',
  //       user: {
  //         username: user.username,
  //         image_url: 'https://pbs.twimg.com/profile_images/1044973752/390dfbe9-eccf-41f9-822e-17c8d4c251b4.jpg',
  //         liked: [],
  //         disliked: [],
  //         groups: [],
  //         authored: [],
  //         testid: 1,
  //         friends: []
  //       }
  //     };
  //   });
  // };

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