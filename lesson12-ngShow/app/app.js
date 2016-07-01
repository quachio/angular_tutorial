var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function () {
  console.log('config');
});

myNinjaApp.run(function () {
  console.log('run');
});

myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {

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
      available: false,

    },
    {
      name: 'Ryu',
      belt: 'gold',
      rate: 100,
      available: false,
    },
  ];

  },
]);
