const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, options) {
  const additionArray = [];
  options.additionRepeatTimes = options?.additionRepeatTimes ?? 1;
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition !== undefined)
      additionArray.push(`${options.addition}`);
  }
  options.additionSeparator = options?.additionSeparator ?? "|";
  const addition = additionArray.join(options.additionSeparator);
  const result = [];
  options.repeatTimes = options?.repeatTimes ?? 1;
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str + addition);
  }
  options.separator = options?.separator ?? "+";
  return result.join(options.separator);
}

module.exports = {
  repeater,
};
