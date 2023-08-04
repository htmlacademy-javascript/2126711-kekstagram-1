"use strict";

const ID = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25"
];

const DESCRIPTION = [
  "Ура! Отпуск!",
  "Был рад повидаться!",
  "#классныевыходные",
  "Грустно уезжать(",
  "Только посмотрите!",
  "#luxarylife",
  "Прекрасный вид",
  "#жизньпрекрасна",
];

const COMMENTS = [
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "В целом всё неплохо. Но не всё.",
  "Всё отлично!",
];

const NAMES = [
  "Иван",
  "Филлип",
  "Игнат",
  "Фрося",
  "Бурлак1985",
  "Зинаида Павловна",
  "Петруха",
  "Контролер1914",
  "Рука-базука",
  "Феодал001",
  "Кристофер",
  "Стрыга",
  "ОЛЕГ",
  "Басурманин777",
];

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createDescription = () => ({
  id: getRandomArrayElement(ID),
  url: "photos/" + getRandomArrayElement(ID) + ".jpg",
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandom(15, 200),
  comments: createComment(),
});

const createComment = () => ({
  id: getRandom(1, 9999),
  avatar: "img/avatar-" + getRandom(1, 6) + ".svg",
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const descriptionPhoto = Array.from({ length: 25 }, createDescription);

console.log(descriptionPhoto);
