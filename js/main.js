import { renderPictures } from './pictures.js';
import './form.js';
import { getPhotos } from './api.js';
import { showErrorMessage } from './util.js';
import { renderFilters } from './filters.js';

getPhotos()
  .then((posts) => {
    renderPictures(posts);
    renderFilters(posts);
  })
  .catch(() => {
    showErrorMessage();
  });

