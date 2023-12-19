const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArray = [...arr];
  const forSort = [];
  let count = 0;
  tempArray.forEach((element) => {
    if (element !== -1) {
      forSort.push(element);
    }
  });
  forSort.sort((a, b) => a - b);
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] !== -1) {
      tempArray[i] = forSort[count];
      count++;
    }
  }
  return tempArray;
}

module.exports = {
  sortByHeight,
};
