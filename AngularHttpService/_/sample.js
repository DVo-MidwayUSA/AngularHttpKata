/// <reference path="node_modules/angular/angular.js" />

let app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'index.htm',
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});


(function() {
    let shahn = 'cool';

    function hello(i) {
        if (isNaN !== true) {
            return true;
        }
    }
})();
