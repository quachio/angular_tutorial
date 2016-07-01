var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function () {
  console.log('config');
  ninjas = ['yoshi', 'crystal', 'ryu', 'shawn'];
});

myNinjaApp.run(function () {
  console.log('run');
});

myNinjaApp.controller(function () {
  console.log('controllercle');
});
