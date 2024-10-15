const { add } = require('./../src/calculator');

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('returns the number itself for a single number input', () => {
  expect(add('1')).toBe(1);
});

test('returns the sum of multiple numbers when provided as single string argument in function call', () => {
  expect(add('1,5')).toBe(6);
});
