import { EFFECTS, EffectsSettings } from './сonstants.js';

const sliderTag = document.querySelector('.effect-level__slider');
const valueTag = document.querySelector('.effect-level__value');
const imageTag = document.querySelector('.img-upload__preview img');
const sliderContainerTag = document.querySelector('.effect-level');

let currentEffect = EFFECTS.NONE;

noUiSlider.create(sliderTag, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const renderImage = () => {
  if (currentEffect === EFFECTS.NONE) {
    imageTag.style.filter = '';
    return;
  }
  const { unit, style } = EffectsSettings[currentEffect];
  imageTag.style.filter = `${style}(${valueTag.value}${unit})`;
};

sliderTag.noUiSlider.on('update', () => {
  valueTag.value = sliderTag.noUiSlider.get();
  renderImage();
});

export const updateSlider = (effect) => {
  currentEffect = effect;
  const { min, max, step } = EffectsSettings[effect];
  sliderTag.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step
  });
};

export const reset = () => {
  sliderContainerTag.classList.add('hidden');
  currentEffect = EFFECTS.NONE;
  renderImage();
};

export const init = () => {
  sliderContainerTag.classList.remove('hidden');
};
