import { openBigPicture } from './modal.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainerTag = document.querySelector('.pictures');

let localData = [];

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

export const renderPictures = (pictures) => {
  localData = [...pictures];
  clear();
  const createFragment = document.createDocumentFragment();

  pictures.forEach(({ id, url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.dataset.id = id;
    createFragment.appendChild(picture);
  });
  pictureContainerTag.appendChild(createFragment);
};


pictureContainerTag.addEventListener('click', ({ target }) => {
  const card = target.closest('.picture');

  if (card) {
    const id = Number(card.dataset.id);
    const currentPhoto = localData.find((item) => item.id === id);
    openBigPicture(currentPhoto);
  }
});
