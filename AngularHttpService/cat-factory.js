function catFactory($http) {
    function getCatGifs() {
        $http.get('bananas');
    }
    var catFatory = {
        getCatGifs: getCatGifs,
    };

    return catFactory;
}
