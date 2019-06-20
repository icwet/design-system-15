/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */
export default function bemEngine(obj) {
  const DEFAULT_TAG = 'div';

  function bemClasses(obj, ctxBlock) {
    const block = obj.block || ctxBlock;
    const base = block + (obj.elem ? '__' + obj.elem : '');
    const mods = obj.elem ? obj.elemMods : obj.mods;

    let output = base === ctxBlock ? '' : base;
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
        output += ' ' + bemClasses(mix, block);
      }
    }
    return output;
  }
  obj.tag = obj.tag || DEFAULT_TAG;

  // let bemClass = (obj.block) ? block;
  let res = '<' + obj.tag + ' class="';

  return res + '>' + this.bemEngine(obj.content) + '</' + obj.tag + '>';
}
