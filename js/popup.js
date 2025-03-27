import { removeEscapeControl, setEscapeControl } from './escape-control.js';
import { POPUPS } from './сonstants.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  [POPUPS.SUCCESS]: successTemplate,
  [POPUPS.ERROR]: errorTemplate
};

export const showPopup = (type = POPUPS.SUCCESS) => {
  const popup = templates[type].cloneNode(true);
  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      removeEscapeControl();
    }
  });
  setEscapeControl(() => {
    popup.remove();
  });
  body.append(popup);
};
