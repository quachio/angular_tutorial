var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function () {
  console.log('config');
});

myNinjaApp.run(function () {
  console.log('run');
});

myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {

    $scope.removeNinja = function (ninja) {
      var removeNinja = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removeNinja, 1); // Start of and remove 1 element
    };

    $scope.ninjas = [
    {
      name: 'Yoshi',
      belt: 'green',
      rate: 50,
      available: true,
    },
    {
      name: 'Cystal',
      belt: 'Yellow',
      rate: 30,
      available: true,

    },
    {
      name: 'Shawn',
      belt: 'black',
      rate: 10,
      available: true,

    },
    {
      name: 'Ryu',
      belt: 'gold',
      rate: 100,
      available: true,
    },
  ];

  },
]);
