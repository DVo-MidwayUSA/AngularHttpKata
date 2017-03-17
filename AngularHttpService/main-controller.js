function mainController($scope, catFactory) {
    $scope.message = 'hello!';

    $scope.displayCatPhotos = function displayCatPhotos() {
        catFactory.getCatGifs();
    };
}
