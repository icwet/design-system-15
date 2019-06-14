/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */

export default function bemjson(obj) {
  const escapeChars = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  const badChars = /[&<>"]/g;
  const possible = /[&<>"]/;

  const JS_ATTR_NAME = 'onclick';
  const DEFAULT_TAG = 'div';

  const escapeChar = function(char) {
    return escapeMap[char];
  };

  const escape = function(string) {
    if (!possible.test(string)) {
      return string;
    }
    return string.replace(badChars, escapeChar);
  };

  const bemClasses = function(bemjson, userArgs) {
    let block = bemjson.block || userArgs;
    let element = block + bemjson.elem;
  };
}
