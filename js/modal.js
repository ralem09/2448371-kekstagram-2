import { removeEscapeControl, setEscapeControl } from './escape-control.js';
import { COMMENTS_STEP } from './сonstants.js';

const bodyTag = document.body;
const bigPictureTag = document.querySelector('.big-picture');
const closeButtonTag = bigPictureTag.querySelector('.big-picture__cancel');
const commentsContainer = document.querySelector('.social__comments');
const loaderButtonTag = bigPictureTag.querySelector('.comments-loader');
const shownCommentsTag = bigPictureTag.querySelector('.social__comment-shown-count');
const commentTemplate = bigPictureTag.querySelector('.social__comment');

let localComments = [];
let renderedComments = 0;

const renderStatistic = () => {
  shownCommentsTag.textContent = renderedComments;
};

const renderLoader = () => {
  if (!localComments.length) {
    loaderButtonTag.classList.add('hidden');
  } else {
    loaderButtonTag.classList.remove('hidden');
  }
};

const showModal = (isShow = true) => {
  if (isShow) {
    bigPictureTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
    setEscapeControl(hideModal);
  } else {
    bigPictureTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    const avatar = commentElement.querySelector('.social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.append(commentElement);
    renderedComments++;
  });
  commentsContainer.appendChild(fragment);

  renderStatistic();
  renderLoader();
};

const renderModal = ({ url, likes, comments, description }) => {
  bigPictureTag.querySelector('.big-picture__img img').src = url;
  bigPictureTag.querySelector('.likes-count').textContent = likes;
  bigPictureTag.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPictureTag.querySelector('.social__caption').textContent = description;
};

export const openBigPicture = (currentPicture) => {
  commentsContainer.innerHTML = '';
  renderedComments = 0;
  localComments = [...currentPicture.comments];
  showModal();
  renderModal(currentPicture);
  renderComments(currentPicture.comments);
};

function hideModal() {
  showModal(false);
}

loaderButtonTag.addEventListener('click', renderComments);
closeButtonTag.addEventListener('click', () => {
  hideModal();
  removeEscapeControl();
});
