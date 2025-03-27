import { renderPictures } from './pictures.js';
import './form.js';
import { getPhotos } from './api.js';
import { showErrorMessage } from './util.js';

getPhotos()
  .then((posts) => {
    renderPictures(posts);
  })
  .catch(() => {
    showErrorMessage();
  });

