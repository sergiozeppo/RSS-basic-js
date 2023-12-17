const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strNum = String(n);
  const crunchingNums = [];
  for (const digit of strNum) {
    crunchingNums.push(Number(strNum.replace(digit, "")));
  }
  const result = Math.max(...crunchingNums);
  return result;
}

module.exports = {
  deleteDigit,
};
