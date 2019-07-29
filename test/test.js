import chai from 'chai';
import bemEngine from '../src/template-engine';

describe('bem template engine functions', function() {
  it('should return empty content', function() {
    chai
      .expect(bemEngine([false, null, undefined, [], '', { content: false }, { tag: false }]))
      .to.equal('<div></div>');
  });
});
