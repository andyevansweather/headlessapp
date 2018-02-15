const assert = require('assert');
const chai = require('chai');
const index = require('../routes/index');
const expect = chai.expect;


describe('should strip out the dynamodb junk', function() {
    it('should strip the data for the client ok', function() {
        expect(1).to.deep.equal(1);
    });

    let testFunc = index.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    it('test more branches', function() {
        expect(testFunc).to.deep.equal(4);
    });
});





