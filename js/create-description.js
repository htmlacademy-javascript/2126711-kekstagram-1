import { getRandomInteger, getRandomArrayElement } from "./util.js";

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

const getMultipleMessage = (count = 1, arr = []) => {
  let maxCount = MESSAGE_TEXTS.length;
  let newCount;
  const uniqueArray = new Set(arr);

  if (count > maxCount) {
    newCount = maxCount;
  }

  const newText = getRandomArrayElement(MESSAGE_TEXTS);
  uniqueArray.add(newText);

  if (uniqueArray.size === (newCount ? newCount : count)) {
    return Array.from(uniqueArray).join(' ');
  } else {
    return getMultipleMessage(newCount ? newCount : count, Array.from(uniqueArray));
  }
}

const createMessage = () => {
  const count = getRandomInteger(1, 3);

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

const createDescriptionPhoto = Array.from({ length: 25 }, createDescription);

console.log(createDescriptionPhoto);


