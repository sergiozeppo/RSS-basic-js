const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key, decrypt = false) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const tabulaRecta = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
      E: 4,
      F: 5,
      G: 6,
      H: 7,
      I: 8,
      J: 9,
      K: 10,
      L: 11,
      M: 12,
      N: 13,
      O: 14,
      P: 15,
      Q: 16,
      R: 17,
      S: 18,
      T: 19,
      U: 20,
      V: 21,
      W: 22,
      X: 23,
      Y: 24,
      Z: 25,
    };
    let result = "";
    let count = 0;
    let upperKey = key.toUpperCase();
    let difference = 0;
    while (upperKey.length < message.length) {
      upperKey += upperKey;
    }
    upperKey = upperKey.slice(0, message.length);
    const upperArray = [...message.toUpperCase()];
    upperArray.forEach((element) => {
      if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
        if (!decrypt) {
          difference = element.charCodeAt() + tabulaRecta[upperKey[count++]];
          if (difference > 90) {
            difference = difference + 64 - 90;
          }
        } else {
          difference = element.charCodeAt() - tabulaRecta[upperKey[count++]];
          if (difference < 65) {
            difference = difference - 64 + 90;
          }
        }
        result += String.fromCharCode(difference);
      } else {
        result += element;
      }
    });
    return this.isDirect ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    return this.encrypt(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
