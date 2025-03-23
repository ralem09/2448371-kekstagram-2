import {getRandomIdFromRangeGenerator, getRandomInteger} from './util.js';

const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;

const POST_LENGTH = 25;

const MIN_COMMENT_ID = 0;
const MAX_COMMENT_ID = 500;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const NAMES = [
  'Василий',
  'Елена',
  'Анатолий',
  'Анастасия',
  'Юлия',
  'Вероника',
  'Виктория',
  'Сергей',
  'Михаил'
];

const DESCRIPTION = [
  'Сегодня хороший день',
  'Всем привет',
  'Первый пост',
  'Жду комментарии',
  'Сказочное Бали',
  'Самолет высоко в небе',
];

const TEXT_COMMENTS = [
  'Всё отлично!',
  'Можно было и оригинальнее',
  'Поставлю я лайк',
  'Посмотрел и хватит на этом',
  'Мечтать не запрещается',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const generateRandomPhotoId = getRandomIdFromRangeGenerator(MIN_PHOTO_ID, MAX_PHOTO_ID);
const randomCommentId = getRandomIdFromRangeGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);

const comment = () => {
  const createAvatarUrl = `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`;
  const randomCommentIndex = getRandomInteger(0, TEXT_COMMENTS.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id: randomCommentId(),
    avatar: createAvatarUrl,
    comment: TEXT_COMMENTS[randomCommentIndex],
    name: NAMES[randomNameIndex],
  };
};

const createObjectPost = () => {
  const photoId = generateRandomPhotoId();
  const photoUrl = `photos/${photoId}.jpg`;
  const description = DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)];
  const likes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const commentsNumber = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const commentsArray = Array.from({ length: commentsNumber }, comment);
  return {
    id: photoId,
    url: photoUrl,
    description: description,
    likes: likes,
    comments: commentsArray,
  };
};

const posts = Array.from({ length: POST_LENGTH }, createObjectPost);

export {posts};
