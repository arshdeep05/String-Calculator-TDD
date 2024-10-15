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

test('returns the sum of multiple numbers seperated by \\n and comma when provided as single string argument in function call', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('returns the sum of multiple numbers seperated by dynamic delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('throws an error for multiple negative numbers', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});
