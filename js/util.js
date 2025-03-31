import { DEBOUNCETIME, TIMEERROR } from './сonstants.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showErrorMessage = () => {
  const messageTag = dataErrorTemplate.cloneNode(true);
  body.append(messageTag);
  setTimeout(() => {
    messageTag.remove();
  }, TIMEERROR);
};

export const debounce = (callback, timeoutDelay = DEBOUNCETIME) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
