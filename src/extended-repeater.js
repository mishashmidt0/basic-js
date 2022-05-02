const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if (!options.separator) options.separator = '|';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.additionSeparator) options.additionSeparator = '|';

  let strA = '';

  if (options && options.addition !== undefined) {
    strA = Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator);
  }


  let f = Array(options.repeatTimes).fill(String(str) + strA).join(options.additionSeparator);
  return f

}

module.exports = {
  repeater
};
