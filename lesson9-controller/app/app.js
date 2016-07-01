var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function () {
  console.log('config');
});

myNinjaApp.run(function () {
  console.log('run');
});

myNinjaApp.controller('NinjaController', ['$scope', function ($scope) {

  $scope.message = "hey y'all";

  $scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shawn'];

}]);
