import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import './slider.js';
import { reset as resetEffects } from './effects.js';
import { showPopup } from './popup.js';
import { POPUPS, SubmitCaptions } from './сonstants.js';
import { postPhoto } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const formTag = document.querySelector('.img-upload__form');
const uploadImageTag = formTag.querySelector('.img-upload__input');
const modalTag = formTag.querySelector('.img-upload__overlay');
const closeButtonTag = formTag.querySelector('.img-upload__cancel');
const submitButton = formTag.querySelector('.img-upload__submit');
const descriptionTag = formTag.querySelector('.text__description');
const hashtagsTag = formTag.querySelector('.text__hashtags');

const showModal = (isShow = true) => {
  if (isShow) {
    modalTag.classList.remove('hidden');
  } else {
    modalTag.classList.add('hidden');
  }
};

const closeModal = () => {
  showModal(false);
  formTag.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const canCloseModal = () => !(document.activeElement === hashtagsTag || document.activeElement === descriptionTag);

const openModal = () => {
  showModal();
  setEscapeControl(closeModal, canCloseModal);
};

uploadImageTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscapeControl();
});

const blockSubmitButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SubmitCaptions.SENDING : SubmitCaptions.IDLE;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();
  blockSubmitButton();
  if (isValid()) {
    postPhoto(new FormData(formTag))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeModal();
        removeEscapeControl();
        showPopup();
      })
      .catch(() => {
        showPopup(POPUPS.ERROR);
      })
      .finally(() => {
        blockSubmitButton(false);
      });
  }
});
