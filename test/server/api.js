const assert = require('assert');

describe('Basic Mocha String Test', () => {
  it('should return first charachter of the string', () => {
    assert.equal('Hello'.charAt(0), 'H');
  });
});
