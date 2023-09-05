"use strict";

const MIN_LIKES_VALUE = 15;
const MAX_LIKES_VALUE = 200;

const DESCRIPTIONS = [
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

const MESSAGE_TEXTS = [
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

const getMultipleMessage = (count, arr = []) => {
  let textArray = arr;
  let text = getRandomArrayElement(MESSAGE_TEXTS);

  if (textArray.length != count) {
    textArray.push(text);
  }

  let uniqueArray = Array.from(new Set(textArray));
  console.log(uniqueArray);

  // TODO:
  // 1 - юзер не может перебирать больше чем есть всего фраз (НЕ ДОБАВЛЯТЬ БОЛЬШЕ ЧЕМ НУЖНО)
  // 2 - упростить логику пуша слова (Удалять уже использованные предложения)
  // 3 - попробовать использовать new Set()
  if (uniqueArray.length === count) {
    return uniqueArray.join(' ')
  } else {
    return getMultipleMessage(count, textArray)
  }

}

const createMessage = () => {
  const count = getRandomInteger(1, 2);

  return getMultipleMessage(count);
}

const createComment = () => ({
  id: getRandomInteger(1, 9999),
  avatar: "img/avatar-" + getRandomInteger(1, 6) + ".svg",
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createDescription = (_, index) => ({
  id: index + 1,
  url: "photos/" + (index + 1) + ".jpg",
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_VALUE, MAX_LIKES_VALUE),
  comments: Array.from({ length: getRandomInteger(0, 15) }, createComment),
});

const descriptionPhoto = Array.from({ length: 25 }, createDescription);

console.log(descriptionPhoto);
