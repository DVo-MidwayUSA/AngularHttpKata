/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/Scripts/jasmine/jasmine.js" />
/// <reference path="~/Scripts/angular-mocks.js" />
/// <reference path="index.js" />

describe('A suite is just a function', function() {
    let a;

    it('and so is a spec', function() {
        a = true;

        expect(a).toBe(false);
    });
});
