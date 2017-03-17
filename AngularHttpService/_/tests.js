/// <reference path="node_modules/jasmine/bin/jasmine.js" />
/// <reference path="index.js" />

describe('A suite is just a function', function() {
    let a;

    it('and so is a spec', function() {
        a = true;

        expect(a).toBe(false);
    });
});
