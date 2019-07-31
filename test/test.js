import chai from 'chai';
import bemEngine from '../src/template-engine';

describe('bem template engine functions', function() {
  describe('content', function() {
    it('should return empty', function() {
      chai
        .expect(bemEngine([false, null, undefined, [], '', { content: false }, { tag: false }]))
        .to.equal('<div></div>');
    });
  });

  describe('elem', function() {
    it('should set class to elem inside content', function() {
      chai
        .expect(
          bemEngine({
            block: 'button',
            content: [{ elem: 'control' }]
          })
        )
        .to.equal('<div class="button"><div class="button__control"></div></div>');
    });
  });

  describe('mods', function() {
    it('should ignore null', function() {
      chai
        .expect(bemEngine({ block: 'button', tag: 'a', mods: { type: null } }))
        .to.equal('<a class="button"></a>');
    });

    it('should ignore empty', function() {
      chai
        .expect(bemEngine({ block: 'button', tag: 'a', mods: { type: '' } }))
        .to.equal('<a class="button"></a>');
    });

    it('should not ignore boolean', function() {
      chai
        .expect(bemEngine({ block: 'button', mods: { visible: false, disabled: true } }))
        .to.equal('<div class="button button_disabled"></div>');
    });

    it('should not ignore zero', function() {
      chai
        .expect(bemEngine({ block: 'button', mods: { num: 0 } }))
        .to.equal('<div class="button button_num_0"></div>');
    });
  });

  describe('mix', function() {
    it('should not set undefined', function() {
      chai
        .expect(
          bemEngine({
            block: 'button',
            mix: [null, undefined]
          })
        )
        .to.equal('<div class="button"></div>');
    });

    it('should set elem', function() {
      chai
        .expect(bemEngine({ block: 'button', mix: [{ elem: 'mix' }] }))
        .to.equal('<div class="button button__mix"></div>');
    });

    it('should set mods', function() {
      chai
        .expect(
          bemEngine({ block: 'button', mix: [{ mods: { disabled: true, theme: 'normal' } }] })
        )
        .to.equal('<div class="button  button_disabled button_theme_normal"></div>');
    });

    it('should set elem mods', function() {
      chai
        .expect(
          bemEngine({ block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] })
        )
        .to.equal('<div class="button button__control button__control_disabled"></div>');
    });

    it('should set several mixes', function() {
      chai
        .expect(
          bemEngine({
            block: 'button',
            mix: [
              { block: 'link' },
              { elem: 'control' },
              { mods: { disabled: true } },
              { block: 'label', elem: 'first', elemMods: { color: 'red' } }
            ]
          })
        )
        .to.equal(
          '<div class="button link button__control  button_disabled label__first label__first_color_red"></div>'
        );
    });
  });

  describe('tag', function() {
    it('should return html tag <div> by default', function() {
      chai.expect(bemEngine({})).to.equal('<div></div>');
    });
    it('should return html tag <span>', function() {
      chai.expect(bemEngine({ tag: 'span' })).to.equal('<span></span>');
    });
    it('should return content when `tag` is empty', function() {
      chai.expect(bemEngine({ tag: false, content: 'label' })).to.equal('label');
    });
  });
});
