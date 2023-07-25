"use strict";

// Номер 1

const isPalindrom = (str) => {
  let string = str.replaceAll(" ").toLowerCase();
  string.split('').reverse().join('');

  if (str === string) {
    return true;
  }

  return false;
}

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');

// Номер 2

const getNumber = (str) => {
  let parsed = parseFloat(str.replace(/[^\d]/g, ''));

  if (isNaN(parsed)) {
    return NaN;
  }

  return Math.abs(parsed);
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);

// Номер 3

const getAddString = (startSymbols, amountSymbols, additionalSymbols) => {
  for (let i = startSymbols; i <= amountSymbols;  i += additionalSymbols) {

  }
}

getAddString('1', 2, '0');
getAddString('1', 4, '0');
getAddString('q', 4, 'werty');
getAddString('q', 4, 'we');
getAddString('qwerty', 4, '0');

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
