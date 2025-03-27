import { isValid, reset as resetValidation} from './validation.js';
import {reset as resetScale} from './scale.js';
import './slider.js';
import { reset as resetEffects } from './effects.js';

const formTag = document.querySelector('.img-upload__form');
const uploadImageTag = formTag.querySelector('.img-upload__input');
const modalTag = formTag.querySelector('.img-upload__overlay');
const closeButtonTag = formTag.querySelector('.img-upload__cancel');

const showModal = (isShow = true) => {
  if (isShow) {
    modalTag.classList.remove('hidden');
  } else {
    modalTag.classList.add('hidden');
  }
};

const openModal = () => {
  showModal();
};

const closeModal = () => {
  showModal(false);
  formTag.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

uploadImageTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});
