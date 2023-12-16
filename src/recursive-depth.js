const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let i = 0;
    while (arr.length) {
      i++;
      arr = arr.reduce((level, element) => {
        if (Array.isArray(element)) level.push(...element);
        return level;
      }, []);
    }
    return i;
  }
}

module.exports = {
  DepthCalculator,
};
