const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
export const renderPictures = (pictures) => {


  const createFragment = document.createDocumentFragment();

  pictures.forEach(({ url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    createFragment.appendChild(picture);
  });
  pictureContainer.appendChild(createFragment);
};
