/// <reference path="Scripts/angular.js" />
'use strict';

var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', 'catFactory', mainController]);

app.factory('catFactory', ['$http', catFactory]);
