/// <reference path="Scripts/angular.js" />
'use strict';

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.message = 'hello!';
});
