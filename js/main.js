"use strict";

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

const MESSAGE_TEXT = [
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "В целом всё неплохо. Но не всё.",
  "Всё отлично!",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getRandomInteger(1, 9999),
  avatar: "img/avatar-" + getRandomInteger(1, 6) + ".svg",
  message: [MESSAGE_TEXT[getRandomInteger(1, MESSAGE_TEXT.length)], MESSAGE_TEXT[getRandomInteger(1, MESSAGE_TEXT.length)]].join(" "),
  name: getRandomArrayElement(NAMES),
});

const COMMENTS = Array.from({ length: getRandomInteger(1, 15) }, createComment);

const createDescription = (_, index) => ({
  id: index + 1,
  url: "photos/" + (index + 1) + ".jpg",
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: COMMENTS,
});

const descriptionPhoto = Array.from({ length: 25 }, createDescription);

console.log(descriptionPhoto);
