const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

    describe('Add functionality', () => {
       
        it("should add two numbers", () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it("should add two numbers async", (done) => {
            var res = utils.asyncAdd(33, 11, (sum) => {
                expect(sum).toBe(44);
                done();
            });
        });

    });

    it("should square two numbers", () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
    });


    it("should include age", () => {

        expect({
            LastName: 'Diana',
            age: 22
        }).toInclude({
            age: 22
        });
    });

});

it("check user first name and last name", () => {
    var user = {
        location: 'Minsk',
        age: 22
    };
    var res = utils.setName(user, 'Diana Gerasimchuk');
    expect(res).toInclude({
        fistName: 'Diana',
        lastName: 'Gerasimchuk'
    });
});