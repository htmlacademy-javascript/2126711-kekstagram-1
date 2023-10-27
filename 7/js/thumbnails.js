const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;


const getThumbnail = ({ url, likes, comments, id }) => {
  const thumbnailElement = thumbnailsTemplate.cloneNode(true);
  const imageLink = thumbnailElement.querySelector('a.picture');
  const image = thumbnailElement.querySelector('img.picture__img');
  const commentsContainer = thumbnailElement.querySelector('.picture__comments');
  const likesContainer = thumbnailElement.querySelector('.picture__likes');

  image.src = url;
  commentsContainer.textContent = comments.length;
  likesContainer.textContent = likes;
  imageLink.setAttribute('data-id', id);

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

export { drawThumbnails };
