import { createDescriptionPhoto } from './create-description.js';

const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;
const thumbnailsData = createDescriptionPhoto();

const getThumbnail = ({ url, likes, comments }) => {
  const thumbnailElement = thumbnailsTemplate.cloneNode(true);
  const imageLink = thumbnailElement.querySelector('a.picture');
  const image = thumbnailElement.querySelector('img.picture__img');
  const commentsContainer = thumbnailElement.querySelector('.picture__comments');
  const likesContainer = thumbnailElement.querySelector('.picture__likes');

  imageLink.href = url;
  image.src = url;
  commentsContainer.textContent = comments.length;
  likesContainer.textContent = likes;

  return thumbnailElement;
};

const drawThumbnails = (pictData) => {
  const picturesList = document.createDocumentFragment();

  for (const pictDataElem of pictData) {
    const thumbnail = getThumbnail(pictDataElem);
    picturesList.append(thumbnail);
  }

  thumbnailsList.append(picturesList);
};

drawThumbnails(thumbnailsData);

export { drawThumbnails };
