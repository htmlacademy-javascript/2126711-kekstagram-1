import { createDescriptionPhoto } from './create-description.js';

const usersPictures = document.querySelector('.big-picture');
usersPictures.classList.remove('hidden');

const similarListElement = usersPictures.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content;

const similarPicture = createDescriptionPhoto();

const similarListFragment = document.createDocumentFragment();

similarPicture.forEach(({url, likes, comments}) => {
  const photoElement = similarPictureTemplate.cloneNode(true);

  photoElement.querySelector('img.url').textContent = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;

  similarListFragment.appendChild(photoElement);
});

similarListElement.appendChild(similarListFragment);
