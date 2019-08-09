/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */

export default function(obj) {
  function outputClasses(obj, ctxBlock) {
    if (ctxBlock && obj.elem && !obj.block) {
      obj.block = ctxBlock;
    }

    // eslint-disable-next-line no-use-before-define
    const resultClass = obj.block || ctxBlock ? bemClass(obj) : '';
    if (resultClass === '') {
      return '';
    }

    if (typeof obj !== 'object') {
      return obj;
    }
    return ` class="${resultClass}"`;
  }

  // eslint-disable-next-line no-shadow
  function bemClass(obj, argBlock) {
    const block = obj.block || argBlock;
    if (!block) {
      return '';
    }
    const base = block + (obj.elem ? `__${obj.elem}` : '');
    const mods = obj.elem ? obj.elemMods : obj.mods;

    let output = base === argBlock ? '' : base;

    if (mods) {
      // eslint-disable-next-line guard-for-in
      for (const i in mods) {
        if (typeof mods[i] === 'number') {
          mods[i] += '';
        }
        if (mods[i]) {
          output += ` ${base}_${i}${mods[i] === true ? '' : `_${mods[i]}`}`;
        }
      }
    }

    if (obj.mix) {
      if (!Array.isArray(obj.mix)) {
        obj.mix = [obj.mix];
      }
      for (let i = 0; i < obj.mix.length; i += 1) {
        const mix = obj.mix[i];
        if (mix) {
          output += ` ${bemClass(mix, block)}`;
        }
      }
    }
    return output;
  }

  // eslint-disable-next-line no-shadow
  function toHTML(obj, ctxBlock) {
    if (obj === undefined || obj === false || obj === null) {
      return '';
    }
    if (typeof obj !== 'object') {
      return obj;
    }
    if (obj.block) {
      ctxBlock = obj.block;
    }
    if (Array.isArray(obj)) {
      // eslint-disable-next-line no-use-before-define
      return concatArray(obj, ctxBlock);
    }
    if (!obj) {
      return `${obj}`;
    }
    if (obj.tag === false) {
      return toHTML(obj.content || '', ctxBlock);
    }

    const DEFAULT_TAG = 'div';
    obj.tag = obj.tag || DEFAULT_TAG;

    const result = `<${obj.tag}${outputClasses(obj, ctxBlock)}`;
    return `${result}>${toHTML(obj.content, ctxBlock)}</${obj.tag}>`;
  }

  function concatArray(array, ctxBlock) {
    let output = '';
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] !== undefined && array[i] !== false && array[i] !== null) {
        output += toHTML(array[i], ctxBlock);
      }
    }
    return output;
  }

  return toHTML(obj);
}
