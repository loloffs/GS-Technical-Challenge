import { addLetters, isPrime } from '../../src/libs/prime';
import { assert } from "chai";

describe("prime library", () => {

  // isPrime
  it('should return true (prime) when the input is 3', function () {
    assert.isTrue(isPrime(3));
  });
  it('should return false (not prime) when the input is 6', function () {
    assert.isTrue(!isPrime(6));
  });
  it('should return true (prime) when the input is 29', function () {
    assert.isTrue(isPrime(29));
  });
  it('should return false (not prime) when the input is 1', function () {
    assert.isTrue(!isPrime(1));
  });
  it('should return true (prime) when the input is 2', function () {
    assert.isTrue(isPrime(2));
  });

  // addLetters
  it('should take aaa and output 3', function () {
    assert.equal(addLetters('aaa'), 3);
  });
  it('should take bbb and output 6', function () {
    assert.equal(addLetters('bbb'), 6);
  });
  it('should take abc and output 6', function () {
    assert.equal(addLetters('abc'), 6);
  });
  it('should take abz and output 29', function () {
    assert.equal(addLetters('abz'), 29);
  });
  it('should take AbAccD and output 3', function () {
    assert.equal(addLetters('AbAccD'), 14);
  });
  it('should take ..a/ cb2 and output 6', function () {
    assert.equal(addLetters('..a/ cb2'), 6);
  });
  it('should take !!!!! and output 0', function () {
    assert.equal(addLetters('!!!!!'), 0);
  });
});