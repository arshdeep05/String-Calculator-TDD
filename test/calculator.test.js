const { add } = require('./../src/calculator');

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('returns the number itself for a single number input', () => {
  expect(add('1')).toBe(1);
});
