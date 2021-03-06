var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  console.log('config');

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'NinjaController',
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController',
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: 'ContactController',
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController',
    })
    .otherwise({
      redirectTo: '/home',
    });
},
]);

myNinjaApp.directive('randomNinja', [function () {

    return {   // ACEM, E and A, e stand for element and
      restrict: 'E',
      scope: {
        ninjas: '=',
        title: '=',
      },
      templateUrl: 'views/random.html',
      transclude: true, // you you to pust nested html element in between your custom directive
      replace: true,
      controller: function ($scope) {
        $scope.random = Math.floor(Math.random() * 4); // Give number betwee 0 and 3
      },
    };
  },
]);

myNinjaApp.run(function () {
  console.log('run');
});

myNinjaApp.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {
    console.log('myNinjaApp.controller');

    $scope.removeNinja = function (ninja) {
      console.log(ninja);
      var removeNinja = $scope.ninjas.indexOf(ninja);
      console.log('Removing ninja:' + $scope.ninjas[removeNinja].name);
      $scope.ninjas.splice(removeNinja, 1); // Start of and remove 1 element
    };

    $scope.addNinja = function () {
      $scope.ninjas.push({
        name: $scope.newninja.name,
        belt: $scope.newninja.belt,
        rate: parseInt($scope.newninja.rate),
        available: true,
      });

      $scope.newninja.name = '';
      $scope.newninja.belt = '';
      $scope.newninja.rate = '';
    };

    $scope.removeAll = function () {
      console.log('removeAll');
      $scope.ninjas = [];
    };

    $http.get('data/ninjas.json').success(function (data) {
      $scope.ninjas = data;
    });
  },
]);

myNinjaApp.controller('ContactController', ['$scope', '$location', function ($scope, $location) {
    $scope.sendMessage = function () {
      $location.path('/contact-success');
    };
  },
]);
