var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']); //[], this is where you at dependencies

myNinjaApp.config(['$routeProvider', function ($routeProvider) {
  console.log('config');

  // Setting up route
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
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

myNinjaApp.run(function () {
  console.log('run');
});

myNinjaApp.controller('NinjaController', ['$scope', '$http', function ($scope, $http) {
    console.log('myNinjaApp.controller');

    $http.get('data/ninjas.json').success(function (data) {
      $scope.ninjas = data;
    });

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
  },
]);
