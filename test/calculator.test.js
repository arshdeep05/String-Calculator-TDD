const { add } = require('./../src/calculator');

test('Empty string returns 0', () => {
  expect(add('')).toBe(0);
});

