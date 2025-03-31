import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import './slider.js';
import { reset as resetEffects } from './effects.js';
import { showPopup } from './popup.js';
import { POPUPS, SubmitCaptions } from './сonstants.js';
import { postPhoto } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const bodyTag = document.body;
const formTag = document.querySelector('.img-upload__form');
const uploadImageTag = formTag.querySelector('.img-upload__input');
const modalTag = formTag.querySelector('.img-upload__overlay');
const closeButtonTag = formTag.querySelector('.img-upload__cancel');
const submitButton = formTag.querySelector('.img-upload__submit');
const descriptionTag = formTag.querySelector('.text__description');
const hashtagsTag = formTag.querySelector('.text__hashtags');
const imageTag = formTag.querySelector('.img-upload__preview img');
const previewsTag = formTag.querySelectorAll('.effects__preview');

const showModal = (isShow = true) => {
  if (isShow) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
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

const setImage = () => {
  const file = uploadImageTag.files[0];
  const url = URL.createObjectURL(file);
  imageTag.src = url;
  previewsTag.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
  });
};

const openModal = () => {
  showModal();
  setImage();
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
  if (isValid()) {
    blockSubmitButton();
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
