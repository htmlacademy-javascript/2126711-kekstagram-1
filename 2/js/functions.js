"use strict";

// Номер 1

const isPalindrom = (str) => {
  let string = str.replaceAll(" ").toLowerCase();
  let reverseString = string.split('').reverse().join('');

  if (string === reverseString) {
    return true;
  }

  return false;
};

console.log(isPalindrom('топот'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('Кекс'));

// Номер 2

const getNumber = (str) => {
  let parsed = parseInt(str.toString().replace(/[^\d]/g, ''));

  if (isNaN(parsed)) {
    return NaN;
  }

  return parsed;
};

console.log(getNumber('2023 год'));
console.log(getNumber('ECMAScript 2022'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('агент 007'));
console.log(getNumber('а я томат'));
console.log(getNumber(2023));
console.log(getNumber(-1));
console.log(getNumber(1.5));

// Номер 3
const getAddSymbol = (length, directLength, addSymbol) => {
  let availableLength = directLength - length;
  return addSymbol.slice(0, availableLength);
}

const getAddString = (baseString, directLength, addSymbol) => {
  if (length < directLength) {
    const newString = getAddSymbol(length, directLength, addSymbol) + baseString;
    return getAddString(newString, directLength, addSymbol);
  }

  return baseString;
};

console.log(getAddString('1', 2, '0'));
console.log(getAddString('1', 4, '0'));
console.log(getAddString('q', 4, 'werty'));
console.log(getAddString('q', 4, 'we'));
console.log(getAddString('qwerty', 4, '0'));

// Номер 4

const getStringLength = (str, maxLength) => {
  let length = str.length;

  if (length > maxLength) {
    return false;
  }

  return true;
}

console.log(getStringLength('22 бобра', 20));
console.log(getStringLength('22', 18));
console.log(getStringLength('138 общипанных куриц', 10));
