import { HASHTAG_FORMULA, MAX_DESCRIPTION, MAX_HASHTAGS } from './сonstants.js';

const formTag = document.querySelector('.img-upload__form');
const descriptionTag = formTag.querySelector('.text__description');
const hashtagsTag = formTag.querySelector('.text__hashtags');

const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const validateDescription = (value) => value.length <= MAX_DESCRIPTION;

const checkUniqueHashtags = (value) => {
  const hashtags = getHashtags(value);
  const uniqueHashtags = [...new Set(hashtags)];
  return hashtags.length === uniqueHashtags.length;
};

const checkHashtagsCount = (value) => {
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const validateHashtag = (value) => {
  const hashtags = getHashtags(value);
  return hashtags.every((element) => HASHTAG_FORMULA.test(element));
};

pristine.addValidator(
  descriptionTag,
  validateDescription,
  `Текст не должен превышать ${MAX_DESCRIPTION} символов`
);

pristine.addValidator(
  hashtagsTag,
  checkUniqueHashtags,
  'Хештеги не должны повторяться',
);

pristine.addValidator(
  hashtagsTag,
  checkHashtagsCount,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`,
);

pristine.addValidator(
  hashtagsTag,
  validateHashtag,
  'Хештег содержит недопустимые символы',
);

export const isValid = () => pristine.validate();

export const reset = () => pristine.reset();
