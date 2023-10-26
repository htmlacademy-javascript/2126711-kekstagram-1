import {drawThumbnails} from './thumbnails.js';
import {openFullPhoto} from './full-screen-image.js';

const photosContainer = document.querySelector('.pictures.container');
const fullPhotoContainer = document.querySelector('.big-picture__img');
const likesCountContainer = document.querySelector('.likes-count');
const commentsCounter = document.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');
const fullPhotoDescription = document.querySelector('.social__caption');

const setGalleryData = (data) => {
  const photosData = data;
};

const renderGallery = () => {
  drawThumbnails(photosData);
  photosContainer.addEventListener('click', thumbnailClickHandler);
};

const setFullPhotoData = (currentImg) => {
  const {url, description, likes, comments} = currentImg;

  fullPhotoContainer.src = url;
  fullPhotoDescription.textContent = description;
  likesCountContainer.textContent = likes;
  commentsCounter.textContent = comments.length;
};

setGalleryData();
renderGallery();
setFullPhotoData();
