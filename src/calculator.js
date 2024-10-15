function add(numbers) {
  if (numbers === '') return 0;

  return numbers.split(',').reduce((sum, current) => sum + Number(current), 0);
}

module.exports = { add };
