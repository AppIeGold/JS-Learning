const expect = require('chai').expect
const isEmpty = require('../task2');

describe('isEmpty', function() {

    it ('Возвращает true, если объект пустой', function() {
        expect(isEmpty({})).to.be.true;
    });

    it ('Возвращает false, если в объекте есть свойства', function() {
        expect(isEmpty({
            anything: ''
        })).to.be.false;
    });
});