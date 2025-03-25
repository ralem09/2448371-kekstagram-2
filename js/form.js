

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
  resetValidation();
  formTag.reset();
  resetScale();
};

uploadImageTag.addEventListener('change', () => {
  openModal();
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDeault();
  closeModal();
});

formTag.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});
