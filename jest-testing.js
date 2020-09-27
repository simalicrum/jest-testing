function capitalize(string) {
  let iter = Array.from(string);
  const firstLetterIndex = iter.findIndex((i) => /[a-z]/.test(i));
  iter[firstLetterIndex] = iter[firstLetterIndex].toUpperCase();
  return iter.join("");
}

function reverseString(string) {
  return Array.from(string).reverse().join("");
}

class Calculator {
  constructor(lhs, rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
  add() {
    return this.lhs + this.rhs;
  }
  subtract() {
    return this.lhs - this.rhs;
  }
  multiply() {
    return this.lhs * this.rhs;
  }
  divide() {
    return Math.round(this.lhs / this.rhs);
  }
}

const caesar = function (stringInput, shiftAmount) {
  const lettersLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const lettersUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return Array.from(stringInput)
    .map((i) => {
      if(/[A-Z]/g.test(i)) {
        let newIndex = (lettersUpper.findIndex((j) => j == i) + shiftAmount + 26) % 26;
      if (newIndex < 0) {
        newIndex+=26;
      }
        return lettersUpper[newIndex];
      } else if (/[a-z]/g.test(i)) {
        let newIndex = (lettersLower.findIndex((j) => j == i) + shiftAmount + 26) % 26;
      if (newIndex < 0) {
        newIndex+=26;
      }
        return lettersLower[newIndex];
      } else {
        return i;
      }
    })
    .join("");
};


module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesar,
};
