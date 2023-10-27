const commentsTemplate = document.querySelector('#comment');
const showedComments = document.querySelector('.social__comments').children;
const showedCommentsCounter = document.querySelector('.showed-comments-count');
const loadMoreCommentsButton = document.querySelector('.social__comments-loader');
const userAvatar = { WIDTH: 35, HEIGHT: 35 };

const getShowedCommentsCount = () => showedComments.length;

const updateCommentsCounter = () => {
  showedCommentsCounter.textContent = getShowedCommentsCount();
};

const isAllCommentsLoaded = (commentsCount) => getShowedCommentsCount() === commentsCount;

const getComment = ({avatar, name, message}) => {
  const commentElement = commentsTemplate.cloneNode(true);

  const commentAvatar = commentElement.querySelector('.social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = userAvatar.WIDTH;
  commentAvatar.height = userAvatar.HEIGHT;

  const commentText = commentElement.querySelector('.social__text');
  commentText.textContent = message;

  const comment = document.createDocumentFragment();
  comment.append(commentElement);

  return comment;
};

const getCommentsRenderer = (comments, container, commentsCount = comments.length, startIndex = 0) => () => {
  if (comments.length <= 0) {
    return;
  }

  commentsCount = Math.min(commentsCount, comments.length);

  const commentsArray = comments.slice(startIndex, startIndex + commentsCount);
  const commentsList = document.createDocumentFragment();

  commentsArray.forEach((comment) => {
    commentsList.append(getComment(comment));
  });

  container.append(commentsList);

  if (isAllCommentsLoaded(comments.length)) {
    loadMoreCommentsButton.classList.add('hidden');
  }

  startIndex += commentsCount;
  updateCommentsCounter();
};

export {getCommentsRenderer, updateCommentsCounter, isAllCommentsLoaded};
