import { updateSlider, reset as resetSlider, init as initSlider,} from './slider.js';
import { EFFECTS } from './сonstants.js';

const effectsTag = document.querySelector('.effects');

export const reset = () => {
  resetSlider();
};

effectsTag.addEventListener('change', ({target}) => {
  if (target.value === EFFECTS.NONE) {
    resetSlider();
    return;
  }
  updateSlider(target.value);
  initSlider();
});

reset();
