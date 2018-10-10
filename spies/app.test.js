const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('Spies', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    })

    it('should call save users', () => {
        var email = 'diana@test.com';
        var password = '11111';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    })
});