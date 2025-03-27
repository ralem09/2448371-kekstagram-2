export const MAX_DESCRIPTION = 140;
export const HASHTAG_FORMULA = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}/;
export const MAX_HASHTAGS = 5;

export const SCALE_MIN = 25;
export const SCALE_MAX = 100;
export const SCALE_STEP = 25;
export const SCALE_DEFAULT = SCALE_MAX;
export const SCALE_FACTOR = 0.01;

export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EffectsSettings = {
  [EFFECTS.NONE]: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    style: 'grayscale'
  },
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    style: 'grayscale'
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    style: 'sepia'
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    style: 'invert'
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
    style: 'blur'
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
    style: 'brightness'
  },
};
