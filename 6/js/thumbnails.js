import { createDescriptionPhoto } from './create-description.js';

const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

const thumbnailsData = createDescriptionPhoto();

const getThumbnail = ({ url, likes, comments }) => {
  const thumbnailElement = thumbnailsTemplate.cloneNode(true);
  const imageLink = thumbnailElement.querySelector('a.picture');
  imageLink.href = url;

  const image = thumbnailElement.querySelector('img.picture__img');
  image.src = url;

  const commentsContainer = thumbnailElement.querySelector('.picture__comments');
  commentsContainer.textContent = comments.length;

  const likesContainer = thumbnailElement.querySelector('.picture__likes');
  likesContainer.textContent = likes;

  const thumbnail = document.createDocumentFragment();
  thumbnail.append(thumbnailElement);

  return thumbnail;
};

const drawThumbnails = (pictData) => {
  const picturesList = document.createDocumentFragment();

  for (const pictDataElem of pictData) {

    const thumbnail = getThumbnail(pictDataElem);

    picturesList.append(thumbnail);
  }

  thumbnailsList.append(picturesList);
};

export { drawThumbnails };
