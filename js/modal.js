const bigPictureTag = document.querySelector('.big-picture');
const closeButtonTag = bigPictureTag.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');


const renderComments = (comments) => {
  commentsContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const userAvatar = document.createElement('img');
    userAvatar.classList.add('social__picture');
    userAvatar.src = comment.avatar;
    userAvatar.alt = comment.name;

    const textNode = document.createElement('p');
    textNode.classList.add('social__text');
    textNode.textContent = comment.message;

    commentElement.appendChild(userAvatar);
    commentElement.appendChild(textNode);
    commentsContainer.appendChild(fragment);
  });
};

export const openBigPicture = (currentPicture) => {
  bigPictureTag.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderComments(currentPicture.comments);
  bigPictureTag.querySelector('.big-picture__img img').src = currentPicture.url;
  bigPictureTag.querySelector('.likes-count').textContent = currentPicture.likes;
  bigPictureTag.querySelector('.social__comment-shown-count').textContent = currentPicture.comments.length;
  bigPictureTag.querySelector('.social__comment-total-count').textContent = currentPicture.comments.length;
  bigPictureTag.querySelector('.social__caption').textContent = currentPicture.description;
  bigPictureTag.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureTag.querySelector('.comments-loader').classList.add('hidden');
};

const closeBigPictureOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    bigPictureTag.classList.add('hidden');
  }
};

const hideModal = () => {
  bigPictureTag.classList.add('hidden');
  document.addEventListener('keydown', closeBigPictureOnEsc);
  document.body.classList.remove('modal-open');
};

closeButtonTag.addEventListener('click', hideModal);


