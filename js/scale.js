import { SCALE_MIN, SCALE_MAX, SCALE_DEFAULT, SCALE_FACTOR, SCALE_STEP } from './сonstants.js';

const formTag = document.querySelector('.img-upload__form');
const minusTag = formTag.querySelector('.scale__control--smaller');
const plusTag = formTag.querySelector('.scale__control--bigger');
const inputTag = formTag.querySelector('.scale__control--value');
const imageTag = formTag.querySelector('.img-upload__preview img');

let currentScale = SCALE_DEFAULT;

const render = () => {
  inputTag.value = `${currentScale}%`;
  imageTag.style.transform = `scale(${currentScale * SCALE_FACTOR})`;
};

minusTag.addEventListener('click', () => {
  currentScale = (currentScale - SCALE_STEP >= SCALE_MIN) ? currentScale - SCALE_STEP : SCALE_MIN;
  render();
});

plusTag.addEventListener('click', () => {
  currentScale = (currentScale + SCALE_STEP <= SCALE_MAX) ? currentScale + SCALE_STEP : SCALE_MAX;
  render();
});

export const reset = () => {
  currentScale = SCALE_DEFAULT;
  render();
};

reset();
