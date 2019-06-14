// let bemjson = new (require('../src/template-engine.js'))();
import '../src/template-engine';

require('should');

describe('attributes rendering', function() {
  it('should ignore null attrs', function() {
    bemjson
      .toHtml({ block: 'button', tag: 'a', attrs: { href: null } })
      .should.equal('<a class="button"></a>');
  });
  it('should not ignore empty attrs', function() {
    bemjson
      .toHtml({ block: 'button', tag: 'a', attrs: { href: '' } })
      .should.equal('<a class="button" href=""></a>');
  });
});

describe('bem property', function() {
  it('should not add class to bem=`false` object', function() {
    var data = { block: 'checkbox', bem: false };
    bemjson.toHtml(data).should.equal('<div></div>');
  });
});

describe('cls property', function() {
  it('should add class to bemclasses', function() {
    var data = { block: 'checkbox', cls: 'visible' };
    bemjson.toHtml(data).should.equal('<div class="checkbox visible"></div>');
  });
});

describe('elem', function() {
  it('should not add blockMods to elem', function() {
    bemjson
      .toHtml({ block: 'html', elem: 'body', mods: { block: true }, elemMods: { elem: true } })
      .should.equal('<div class="html__body html__body_elem"></div>');
  });
});

describe('js property', function() {
  it('should add i-bem class to bemclasses', function() {
    var data = { block: 'button', js: true };
    bemjson
      .toHtml(data)
      .should.equal('<div class="button i-bem" onclick="return {&quot;button&quot;:{}};"></div>');
  });
});

describe('mix property', function() {
  it('should add i-bem class to bemclasses', function() {
    var data = { block: 'button', mix: [{ block: 'mix' }] };
    bemjson.toHtml(data).should.equal('<div class="button mix"></div>');
  });

  it('should mixup mods as elemMods, if mixing to elem', function() {
    var data = { block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] };
    bemjson
      .toHtml(data)
      .should.equal('<div class="button button__control button__control_disabled"></div>');
  });

  it('should mixup object', function() {
    var data = {
      block: 'button',
      elem: 'section',
      mix: { block: 'button', elem: 'scroll-compensator' }
    };
    bemjson
      .toHtml(data)
      .should.equal('<div class="button__section button__scroll-compensator"></div>');
  });

  it('should mix block name to classes', function() {
    var data = { block: 'button', mix: { block: 'i-global' } };
    bemjson.toHtml(data).should.equal('<div class="button i-global"></div>');
  });
});

describe('tag property', function() {
  it('should return html tag <div> by default', function() {
    bemjson.toHtml({}).should.equal('<div></div>');
  });
  it('should return html tag <span>', function() {
    bemjson.toHtml({ tag: 'span' }).should.equal('<span></span>');
  });
  it('should return content when `tag` is empty', function() {
    bemjson.toHtml({ tag: false, content: 'label' }).should.equal('label');
  });
});

describe('serialize', function() {
  describe('content', function() {
    it('should return empty content #1', function() {
      bemjson
        .toHtml([
          false,
          null,
          undefined,
          [],
          '',
          { content: false }, // `div` is here
          { tag: false }
        ])
        .should.equal('<div></div>');
    });
  });

  describe('mods', function() {
    it('should ignore null mods', function() {
      bemjson
        .toHtml({ block: 'button', tag: 'a', mods: { type: null } })
        .should.equal('<a class="button"></a>');
    });
    it('should ignore empty mods', function() {
      bemjson
        .toHtml({ block: 'button', tag: 'a', mods: { type: '' } })
        .should.equal('<a class="button"></a>');
    });
    it('should not ignore boolean mods', function() {
      bemjson
        .toHtml({ block: 'button', mods: { visible: false, disabled: true } })
        .should.equal('<div class="button button_disabled"></div>');
    });
    it('should not ignore zero mods', function() {
      bemjson
        .toHtml({ block: 'button', mods: { num: 0 } })
        .should.equal('<div class="button button_num_0"></div>');
    });
  });

  describe('mix', function() {
    it('should not set undefined mix', function() {
      bemjson
        .toHtml({
          block: 'button',
          mix: [null, undefined]
        })
        .should.equal('<div class="button"></div>');
    });
    it('should set elem mix', function() {
      bemjson
        .toHtml({ block: 'button', mix: [{ elem: 'mix' }] })
        .should.equal('<div class="button button__mix"></div>');
    });
    it('should set mods mix', function() {
      bemjson
        .toHtml({ block: 'button', mix: [{ mods: { disabled: true, theme: 'normal' } }] })
        .should.equal('<div class="button  button_disabled button_theme_normal"></div>');
    });
    it('should set elem mods mix', function() {
      bemjson
        .toHtml({ block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] })
        .should.equal('<div class="button button__control button__control_disabled"></div>');
    });
    it('should set elem elemMods mix', function() {
      bemjson
        .toHtml({ block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] })
        .should.equal('<div class="button button__control button__control_disabled"></div>');
    });
    it('should set several mixes', function() {
      bemjson
        .toHtml({
          block: 'button',
          mix: [
            { block: 'link' },
            { elem: 'control' },
            { mods: { disabled: true } },
            { block: 'label', elem: 'first', elemMods: { color: 'red' } }
          ]
        })
        .should.equal(
          '<div class="button link button__control  button_disabled label__first label__first_color_red"></div>'
        );
    });
  });

  describe('elem', function() {
    it('should set class to elem inside content', function() {
      bemjson
        .toHtml({
          block: 'button',
          content: [{ elem: 'control' }]
        })
        .should.equal('<div class="button"><div class="button__control"></div></div>');
    });
  });
});
