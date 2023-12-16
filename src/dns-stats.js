const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (const domain of domains) {
    const splitted = domain.split(".").reverse();
    for (let i = 0; i < splitted.length; i++) {
      const DNSDomain = "." + splitted.slice(0, i + 1).join(".");
      result[DNSDomain] = result[DNSDomain]
        ? (result[DNSDomain] = result[DNSDomain] + 1)
        : 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats,
};
