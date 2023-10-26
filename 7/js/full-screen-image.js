import {isEscapeKey} from './utils.js';

const fullPhotoContainer = document.querySelector('.big-picture');
const closeFullPhotoButton = document.querySelector('.big-picture__cancel');

const openFullPhoto = () => {
  document.body.classList.add('modal-open');
  fullPhotoContainer.classList.remove('hidden');

  document.addEventListener('keydown', documentKeyDownHandler);
  closeFullPhotoButton.addEventListener('click', fullPhotoCloseHandler);
};

const closeFullPhoto = () => {
  fullPhotoContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', documentKeyDownHandler);
  closeFullPhotoButton.removeEventListener('click', fullPhotoCloseHandler);

};

function documentKeyDownHandler(evt) {
  if(isEscapeKey(evt)) {
    closeFullPhoto();
  }
}

function fullPhotoCloseHandler() {
  closeFullPhoto();
}

export { openFullPhoto };
