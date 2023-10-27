import { drawThumbnails } from './thumbnails.js';
import { createDescriptionPhoto } from './create-description.js';
import { openFullPhoto } from './full-screen-image.js';

const thumbnailsData = createDescriptionPhoto();
const photosContainer = document.querySelector('.pictures');
const fullPhotoContainer = document.querySelector('.big-picture__img > img');
const likesCountContainer = document.querySelector('.likes-count');
const commentsCounter = document.querySelector('.comments-count');
// const commentsContainer = document.querySelector('.social__comments');
const fullPhotoDescription = document.querySelector('.social__caption');

const setFullPhotoData = (currentImg) => {
  const {url, description, likes, comments} = currentImg;

  fullPhotoContainer.src = url;
  likesCountContainer.textContent = likes;
  commentsCounter.textContent = comments.length;
  fullPhotoDescription.textContent = description;

  openFullPhoto();
};

const thumbnailClickHandler = (evt) => {
  const clickedElement = +evt.target.parentNode.dataset.id;
  const findId = thumbnailsData.find((element) => element.id === clickedElement);
  setFullPhotoData(findId);
};

const renderGallery = () => {
  drawThumbnails(thumbnailsData);
  photosContainer.addEventListener('click', thumbnailClickHandler);
};

renderGallery();

