const { test } = require("@jest/globals");
const { expect } = require("chai");

const digitoUnico = require("./digitoUnico");
const { digitoUnicoReferenceErrorMessage } = require('./utils');

test("digitoUnico should be a function", () => {
  expect(digitoUnico).to.be.a("function");
});

test("digitoUnico(1) should return { result: 1, log: '' }", () => {
  expect(digitoUnico(1)).to.be.deep.equal({ result: 1, log: '' });
});

test("digitoUnico(3) should return { result: 3, log: '' }", () => {
  expect(digitoUnico(3)).to.be.deep.equal({ result: 3, log: '' });
});

test("digitoUnico(9785) should return { result: 2, log: ' digitoUnico(9785) = 29 ->  digitoUnico(29) = 11 ->  digitoUnico(11) = 2' }", () => {
  expect(digitoUnico(9785)).to.be.deep.equal({ result: 2, log: ' digitoUnico(9785) = 29 ->  digitoUnico(29) = 11 ->  digitoUnico(11) = 2' });
});

test("digitoUnico(8391) should return { result: 3, log: ' digitoUnico(8391) = 21 ->  digitoUnico(21) = 3' }", () => {
  expect(digitoUnico(8391)).to.be.deep.equal({ result: 3, log: ' digitoUnico(8391) = 21 ->  digitoUnico(21) = 3' })
});

test("digitoUnico(9785, 4) should return { result: 2, log: ' digitoUnico(9785978597859785) = 116 ->  digitoUnico(116) = 8' }", () => {
  expect(digitoUnico(9785, 4)).to.be.deep.equal({ result: 8, log: ' digitoUnico(9785978597859785) = 116 ->  digitoUnico(116) = 8' });
});

test("digitoUnico(8391, 8) should return { result: 3, log: ' digitoUnico(83918391839183918391839183918391) = 168 ->  digitoUnico(168) = 15 ->  digitoUnico(15) = 6' }", () => {
  expect(digitoUnico(8391, 8)).to.be.deep.equal({ result: 6, log: ' digitoUnico(83918391839183918391839183918391) = 168 ->  digitoUnico(168) = 15 ->  digitoUnico(15) = 6' })
});

test(`digitoUnico() should throw ReferenceError with message "${digitoUnicoReferenceErrorMessage}"`, () => {
  expect(() => digitoUnico()).to.be.throw(ReferenceError, digitoUnicoReferenceErrorMessage);
});
