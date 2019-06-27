function removeOddSum(array, a, b) {
  return array.filter(num => (num.a + num.b) % 2 === 0
  );
};

module.exports = removeOddSum;
