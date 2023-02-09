const assert = require('assert');
const { expect } = require('chai');


describe('should return a one message', () => {
    it('should return hello', function () {
        const message = 'hello';
        expect(message).to.equal('hello');
    });
});