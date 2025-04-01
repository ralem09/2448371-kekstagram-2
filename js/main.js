import { renderPictures } from './pictures.js';
import './form.js';
import { getPhotos } from './api.js';
import { showErrorMessage } from './util.js';
import { initializePhotos as initFilters } from './filters.js';

getPhotos()
  .then((posts) => {
    renderPictures(posts);
    initFilters(posts);
  })
  .catch(() => {
    showErrorMessage();
  });

