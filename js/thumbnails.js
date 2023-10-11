import { createDescriptionPhoto } from './create-description.js';

const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

const thumbnailsData = createDescriptionPhoto();

const similarListFragment = document.createDocumentFragment();

thumbnailsData.forEach(({ url, likes, comments }) => {
  const displayGeneratedData = () => {
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
  };

  return displayGeneratedData;
});

thumbnailsList.appendChild(similarListFragment);
