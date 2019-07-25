import bemEngine from '../src/template-engine';
const chai = require('chai');

describe('bem template engine functions', function() {
  it('should return empty content', function() {
    chai
      .expect(
        bemEngine({
          block: 'layout'
        })
      )
      .to.equal('<div class="layout"></div>');
  });
});
