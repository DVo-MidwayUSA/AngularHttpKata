'use strict';

describe('When a new mainController', function () {

    var sut;
    var $scope;
    var mockCatFactory;

    beforeEach(function () {
        
        $scope = {};

        mockCatFactory = {
            getCatGifs: function getCatGifs() {}
        };

        sut = mainController($scope, mockCatFactory);

    });

    it('Should retrieve cat photo/gif', function () {

        spyOn(mockCatFactory, 'getCatGifs');

        $scope.displayCatPhotos();

        expect(mockCatFactory.getCatGifs).toHaveBeenCalled();
    });    
});

describe('With a catFactory', function () {
    var sut;
    var $http;

    beforeEach(module("myApp"));

    beforeEach(inject(function ($injector) {

        $http = $injector.get('$httpBackend');

        sut = catFactory($http);

    }));

    //it('Should wawawa when getting cat gifs', function() {        
    //    console.log('hi', sut.getCatGifs);

    //    $http.expectGet('http://thecatapi.com/api/images/get?format=xml&results_per_page=20');


    //    $http.flush();


    //});
});
