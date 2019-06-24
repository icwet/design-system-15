/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */
export default function bemEngine(obj) {
  function bemClass(obj, argBlock) {
    const block = obj.block || argBlock;
    const base = block + (obj.elem ? '__' + obj.elem : '');
    const mods = obj.elem ? obj.elemMods : obj.mods;

    let output = base === argBlock ? '' : base;

    if (mods) {
      for (let i in mods) {
        output += ' ' + base + '_' + i + (mods[i] === true ? '' : '_' + mods[i]);
      }
    }

    if (obj.mix) {
      for (let i = 0; i < obj.mix.length; i++) {
        let mix = obj.mix[i];
        if (!mix) {
          continue;
        }
        output += ' ' + bemClass(mix, block);
      }
    }
    return output;
  }

  function outputClasses(obj, ctxBlock) {
    if (ctxBlock && obj.elem && !obj.block) {
      obj.block = ctxBlock;
    }

    let resultClass = obj.block || ctxBlock ? bemClass(obj) : '';

    if (typeof obj !== 'object') {
      return obj;
    }

    if (obj === undefined || obj === null || obj === false) {
      return '';
    }
    return ' class="' + resultClass + '"';
  }

  function toHTML(obj, ctxBlock) {
    const DEFAULT_TAG = 'div';

    if (obj === undefined || obj === false || obj === null) {
      return '';
    }

    if (obj.block) {
      ctxBlock = obj.block;
    }

    obj.tag = obj.tag || DEFAULT_TAG;

    const result = '<' + obj.tag + outputClasses(obj, ctxBlock);

    return result + '>' + toHTML(obj.content, ctxBlock) + '</' + obj.tag + '>';
  }
  return toHTML(obj);
}
