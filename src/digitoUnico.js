const sumN = (n, k) => String(n)
  .repeat(k)
  .split("")
  .reduce((total, number) => total + Number(number), 0);

/**
* @param {number|string} n
* @param {number} k = 1
*/
const digitoUnico = (n, k = 1) => {
  return n < 10
    ? n
    : digitoUnico(sumN(n, k));
}

module.exports = digitoUnico;
