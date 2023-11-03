import { drawThumbnails } from './thumbnails.js';
import { createDescriptionPhoto } from './create-description.js';
import { openFullPhoto, closeFullPhoto } from './full-screen-image.js';

const thumbnailsData = createDescriptionPhoto();
const photosContainer = document.querySelector('.pictures');
const fullPhotoContainer = document.querySelector('.big-picture__img > img');
const likesCountContainer = document.querySelector('.likes-count');
const commentsContainer = document.querySelector('.social__comments');
const fullPhotoDescription = document.querySelector('.social__caption');
const commentsLoaderBtn = document.querySelector('.comments-loader');
const commentsCounter = document.querySelector('.comments-count');
const commentsLoadCounter = document.querySelector('.comments-load-count');

const COMMENTS_PER_PAGE = 5;
let currentCommentsViewCount = 5;

const isAllLoaded = () => {
  if (+commentsCounter.textContent < currentCommentsViewCount) {
    commentsLoadCounter.textContent = commentsCounter.textContent;
    commentsLoaderBtn.classList.add('hidden');
  }
};

const showMoreComments = () => {
  const hiddenComments = Array.from(document.querySelectorAll('.social__comment.hidden'));
  const firstFiveEls = hiddenComments.slice(0, COMMENTS_PER_PAGE);
  firstFiveEls.forEach((hiddenComment) => {
    hiddenComment.classList.remove('hidden');
  });

  currentCommentsViewCount += firstFiveEls.length;
  commentsLoadCounter.textContent = currentCommentsViewCount;

  if (commentsLoadCounter.textContent >= commentsCounter.textContent) {
    commentsLoaderBtn.classList.add('hidden');
  }

  console.log();
  console.log();
  // работа с кнопкой
  // отображение текущшего кол-ва
  // сброс формы если юзер закрыл окно
};

const renderComment = (comment, index) => {
  const commentEl = document.createElement('li');
  commentEl.classList.add('social__comment');
  if (index + 1 > currentCommentsViewCount) {
    commentEl.classList.add('hidden');
  }

  const imgEl = document.createElement('img');
  imgEl.classList.add('social__picture');
  imgEl.setAttribute('src', comment.avatar);
  imgEl.setAttribute('alt', comment.name);
  imgEl.setAttribute('width', 35);
  imgEl.setAttribute('height', 35);

  const textEl = document.createElement('p');
  textEl.classList.add('social__text');
  textEl.textContent = comment.message;

  commentEl.append(imgEl, textEl);

  return commentEl;
};

const initComments = (comments) => {
  commentsContainer.innerHTML = '';

  comments.forEach((el, index) => {
    commentsContainer.append(renderComment(el, index));
  });
};

const setFullPhotoData = (currentImg) => {
  const {url, description, likes, comments} = currentImg;

  fullPhotoContainer.src = url;
  likesCountContainer.textContent = likes;
  commentsCounter.textContent = comments.length;
  fullPhotoDescription.textContent = description;

  isAllLoaded();
  initComments(comments);
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
  commentsLoaderBtn.addEventListener('click', showMoreComments);
};

renderGallery();

const commentsLoadHandler = () => renderGallery();
const removeCommentsLoadHandler = () => commentsLoaderBtn.removeEventListener('click', commentsLoadHandler);

export { removeCommentsLoadHandler };
