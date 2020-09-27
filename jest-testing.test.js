const {capitalize,
  reverseString,
  Calculator,
  caesar} = require('./jest-testing')

test('capitalize a word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('capitalize multiple words', () => {
  expect(capitalize('this is a whole bunch of words')).toBe('This is a whole bunch of words');
});

test('capitalize a sentance with punctuation', () => {
  expect(capitalize('this is a sentance.')).toBe('This is a sentance.')
});

test('capitalize a sentance with punctuation at the beginning of the sentance', () => {
  expect(capitalize('*this* is a sentance.')).toBe('*This* is a sentance.')
});

test('reversing a letter returns the same thing', () => {
  expect(reverseString('a')).toBe('a')
});

test('reversing a word', () => {
  expect(reverseString('Word')).toBe('droW')
});

test('reversing a sentance', () => {
  expect(reverseString('This is a whole sentance.')).toBe('.ecnatnes elohw a si sihT')
});

test('addition of 1 and 1 is 2', () => {
  expect(new Calculator(1, 1).add()).toBe(2)
});

test('addition of 12 and 34 is 46', () => {
  expect(new Calculator(12, 34).add()).toBe(46)
});

test('addition of big numbers', () => {
  expect(new Calculator(890543, 1907789234).add()).toBe(1908679777)
});

test('addition of -12 and 34 is 46', () => {
  expect(new Calculator(-12, 34).add()).toBe(22)
});

test('addition of -12 and -34 is -46', () => {
  expect(new Calculator(-12, -34).add()).toBe(-46)
});

test('subtraction of 1 from 1 is 2', () => {
  expect(new Calculator(1, 1).subtract()).toBe(0)
});

test('subtraction of 34 from 12 is 22', () => {
  expect(new Calculator(12, 34).subtract()).toBe(-22)
});

test('subtraction of big numbers', () => {
  expect(new Calculator(890543, 1907789234).subtract()).toBe(-1906898691)
});

test('subtraction of 34 from -12 is -46', () => {
  expect(new Calculator(-12, 34).subtract()).toBe(-46)
});

test('subtraction of -34 from -12 is 22', () => {
  expect(new Calculator(-12, -34).subtract()).toBe(22)
});

test('multiplication of 1 and 1 is 1', () => {
  expect(new Calculator(1, 1).multiply()).toBe(1)
});

test('multiplication of 12 and 34 is 408', () => {
  expect(new Calculator(12, 34).multiply()).toBe(408)
});

test('multiplication of big numbers', () => {
  expect(new Calculator(8905, 1907).multiply()).toBe(16981835)
});

test('multiplication of -12 and 34 is 46', () => {
  expect(new Calculator(-12, 34).multiply()).toBe(-408)
});

test('multiplication of -12 and -34 is -46', () => {
  expect(new Calculator(-12, -34).multiply()).toBe(408)
});


test('division of 1 and 1 is 1', () => {
  expect(new Calculator(1, 1).divide()).toBe(1)
});

test('division of 408 by 12 is 34', () => {
  expect(new Calculator(408, 12).divide()).toBe(34)
});

test('division of big numbers', () => {
  expect(new Calculator(8905, 1907).divide()).toBe(5)
});

test('division of -408 by -12 is 34', () => {
  expect(new Calculator(-408, -12).divide()).toBe(34)
});

test('division of 408 and -34 is -12', () => {
  expect(new Calculator(408, -34).divide()).toBe(-12)
});

test('caesar shift of 0 for "a" returns "a"', () => {
  expect(caesar('a', 0)).toBe('a')
});

test('caesar shift of 1 for "a" returns "b"', () => {
  expect(caesar('a', 1)).toBe('b')
});

test('caesar shift of -1 for "b" returns "a"', () => {
  expect(caesar('b', -1)).toBe('a')
});

test('caesar shift of 5 for "a" returns "f"', () => {
  expect(caesar('a', 5)).toBe('f')
});

test('caesar shift of -5 for "f" returns "a"', () => {
  expect(caesar('f', -5)).toBe('a')
});

test('caesar shift of 1 for "m" returns "n"', () => {
  expect(caesar('m', 1)).toBe('n')
});

test('caesar shift of -1 for "n" returns "m"', () => {
  expect(caesar('n', -1)).toBe('m')
});


test('caesar shift of 5 for "m" returns "r"', () => {
  expect(caesar('m', 5)).toBe('r')
});

test('caesar shift of -5 for "r" returns "m"', () => {
  expect(caesar('r', -5)).toBe('m')
});

test('caesar shift of 0 for "apple" returns "apple"', () => {
  expect(caesar('apple', 0)).toBe('apple')
});

test('caesar shift of 1 for "apple" returns "bqqmf"', () => {
  expect(caesar('apple', 1)).toBe('bqqmf')
});

test('caesar shift of -1 for "bqqmf" returns "apple"', () => {
  expect(caesar('bqqmf', -1)).toBe('apple')
});

test('caesar shift of -5 for "fuuqj" returns "apple"', () => {
  expect(caesar('fuuqj', -5)).toBe('apple')
});

test('caesar shift of 5 for a sentance with no punctuation or capitalization', () => {
  expect(caesar('the quick brown fox jumps over the lazy dog', 5)).toBe('ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl')
});

test('caesar shift of 5 for a sentance with no punctuation', () => {
  expect(caesar('The quick brown fox jumps over the lazy dog', 5)).toBe('Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl')
});

test('caesar shift of 5 for a sentance', () => {
  expect(caesar('The quick brown fox jumps over the lazy dog.', 5)).toBe('Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl.')
});

test('A bunch of punctuation', () => {
  expect(caesar('&*($--these&78are)))words', 5)).toBe('&*($--ymjxj&78fwj)))btwix')
});

test('testing wrap around result, caesar shift of 38 for a sentance', () => {
  expect(caesar('The quick brown fox jumps over the lazy dog.', 38)).toBe('Ftq cguow ndaiz raj vgybe ahqd ftq xmlk pas.')
});

test('testing negative wrap around result, caesar shift of -38 for a sentance', () => {
  expect(caesar('Ftq cguow ndaiz raj vgybe ahqd ftq xmlk pas.', -38)).toBe('The quick brown fox jumps over the lazy dog.')
});

test('testing negative wrap around result, caesar shift of -38 for a letter', () => {
  expect(caesar('F', -38)).toBe('T')
});