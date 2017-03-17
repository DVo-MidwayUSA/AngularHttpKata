/// <reference path="~/Scripts/angular.js" />

let app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'index.htm',
    }).then(function mySucces(response) {
        $scope.message = response.data;
    }, function myError(response) {
        $scope.message = response.statusText;
    });
});
