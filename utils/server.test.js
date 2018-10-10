const app = require('../server').app;
const expect = require('expect');
const supertest = require('supertest');

it("should return Hello World", (done) => {
    supertest(app)
        .get('/hello')
        .expect(404)
        .expect((response) => {
            expect(response.body).toInclude({
                error: 'Hello world'
            })
        })
        .end(done);
});