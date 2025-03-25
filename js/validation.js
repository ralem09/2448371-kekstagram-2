const MAX_DESCRIPTION = 6;
const HASHTAG_FORMULA = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}/;
const MAX_HASHTAGS = 5;

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

);

pristine.addValidator(
  hashtagsTag,
  checkUniqueHashtags,

);

pristine.addValidator(
  hashtagsTag,
  checkHashtagsCount,

);

pristine.addValidator(
  hashtagsTag,
  validateHashtag,

);


export const isValid = () => pristine.validate();

export const reset = () => pristine.reset();
