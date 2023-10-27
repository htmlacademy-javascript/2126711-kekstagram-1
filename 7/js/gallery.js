import { drawThumbnails } from './thumbnails.js';
import { createDescriptionPhoto } from './create-description.js';
import { openFullPhoto } from './full-screen-image.js';
import { getCommentsRenderer, updateCommentsCounter, isAllCommentsLoaded } from './comments.js';

const thumbnailsData = createDescriptionPhoto();
const photosContainer = document.querySelector('.pictures');
const fullPhotoContainer = document.querySelector('.big-picture__img > img');
const likesCountContainer = document.querySelector('.likes-count');
const commentsCounter = document.querySelector('.comments-count');
const commentsContainer = document.querySelector('.social__comments');
const fullPhotoDescription = document.querySelector('.social__caption');
const loadMoreButton = document.querySelector('.social__comments-loader');

const COMMENTS_PER_PAGE = 5;

let renderComments;

const changeLoadCommentsBtnState = (buttonShowed = true) => {
  if (buttonShowed) {
    loadMoreButton.classList.remove('hidden');

    return;
  }

  loadMoreButton.classList.add('hidden');
};

const commentsLoadHandler = () => renderComments();

const removeCommentsLoadHandler = () => loadMoreButton.removeEventListener('click', commentsLoadHandler);

const initComments = (comments) => {
  commentsContainer.innerHTML = '';

  if (comments.length > 0) {
    renderComments = getCommentsRenderer(comments, commentsContainer, COMMENTS_PER_PAGE);

    renderComments();
    changeLoadCommentsBtnState();

    loadMoreButton.addEventListener('click', commentsLoadHandler);
  }

  if (isAllCommentsLoaded(comments.length)) {
    changeLoadCommentsBtnState(false);
  }

  updateCommentsCounter();
};

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

initComments();
removeCommentsLoadHandler();
renderGallery();

