import { renderPictures } from './pictures.js';
import { debounce } from './util.js';
import { FILTERS } from './сonstants.js';

const filtersTag = document.querySelector('.img-filters');
const formFilterTag = document.querySelector('.img-filters__form');

let photos = [];

const debouncedRender = debounce(renderPictures);

export const renderFilters = (data) => {
  photos = [...data];
  filtersTag.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  formFilterTag.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const Filters = {
  [FILTERS.DEFAULT]: () => photos,
  [FILTERS.RANDOM]: () => [...photos].sort(() => Math.random() - 0.5).slice(0, 10),
  [FILTERS.DISCUSSED]: () => [...photos].sort((b, a) => a.comments.length - b.comments.length)
};


formFilterTag.addEventListener('click', ({ target }) => {
  const filterButton = target.closest('.img-filters__button');
  if (filterButton) {
    setActiveButton(filterButton);
    debouncedRender(Filters[filterButton.id]());
  }
});
