const { digitoUnicoReferenceErrorMessage } = require('./utils');

const sumN = (p) => String(p)
  .split("")
  .reduce((total, number) => total + Number(number), 0);

/**
* @param {number|string} n Número para se calcular o dígito único
* @param {number} k = 1 Quantidade de vezes a repetir n
* @param {string} log = "" Histórico de todos chamadas feitas
*/
const digitoUnico = (n, k = 1, log = "") => {
  if (n === undefined) {
    throw new ReferenceError(digitoUnicoReferenceErrorMessage);
  }

  const p = String(n).repeat(k);

  if (p.length === 1) {
    return { result: Number(p), log };
  }

  const sum = sumN(p);
  const nextLog = `${log} digitoUnico(${p}) = ${sum}${sum < 10 ? "" : " -> "}`;

  return digitoUnico(sum, 1, nextLog);
}

module.exports = digitoUnico;
