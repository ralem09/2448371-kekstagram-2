// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

/* Варианты функций, для генерации уникальных id(чисел)
1. генерирровать числа по порядку (использовать счетчик и замыкания)
2. генирировать случайные числа в диапозоне  и проверять уникальность
3.сделать константы ко всем числам

*/
const POST_LENGTH = 25;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateRandomPhotoId = getRandomIdFromRangeGenerator(1, 25);
const randomCommentId = getRandomIdFromRangeGenerator(0, 500);

const comment = () => {
  const createAvatarUrl = `img/avatar-${getRandomInteger(1, 6)}.svg`;
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
    photo: photoUrl,
    descriptionPhoto: description,
    like: likes,
    comment: commentsArray,
  };
};

const posts = Array.from({ length: POST_LENGTH }, createObjectPost);

console.log(posts);
