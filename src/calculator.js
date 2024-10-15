function add(numbers) {
  if (numbers === '') return 0;

  let delimiter = /[\n,]/;

  if (numbers.startsWith('//')) {
    const seperateDelimiterAndNumbers = numbers.split('\n');
    const delimiterPart = seperateDelimiterAndNumbers[0];
    delimiter = delimiterPart[delimiterPart.length - 1];
    numbers = seperateDelimiterAndNumbers[1];
  }

  numbers = numbers.split(delimiter);

  const negativeNumbers = numbers.filter((n) => n < 0);

  if (negativeNumbers.length) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(',')}`
    );
  }

  return numbers.reduce((sum, current) => sum + Number(current), 0);
}

module.exports = { add };
