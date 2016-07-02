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

myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {
    console.log('myNinjaApp.controller');

    $scope.removeNinja = function (ninja) {
      var removeNinja = $scope.ninjas.indexOf(ninja);
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

    $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 50,
      available: true,
      thumb: 'content/img/droctocat.png',
    },
    {
      name: 'Cystal',
      belt: 'Yellow',
      rate: 30,
      available: true,
      thumb: 'content/img/droidtocat.png',

    },
    {
      name: 'Shawn',
      belt: 'black',
      rate: 10,
      available: true,
      thumb: 'content/img/dunetocat.png',

    },
    {
      name: 'Ryu',
      belt: 'gold',
      rate: 100,
      available: true,
      thumb: 'content/img/femalecodertocat.png',
    },
  ];

  },
]);
