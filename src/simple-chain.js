const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined) {
      const strValue = String(value);
      this.chain.push(strValue);
    } else this.chain.push("( )");
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position > this.chain.length ||
      position < 1
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result;
    if (this.chain.length === 0) return "";
    result = `( ${this.chain[0]} )`;
    for (let i = 1; i < this.chain.length; i++) {
      result += `~~( ${this.chain[i]} )`;
    }
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
