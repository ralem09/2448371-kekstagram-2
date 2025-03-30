import { SERVERDATA, SERVERURL } from './сonstants.js';

export const getPhotos = () => fetch(SERVERDATA)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const postPhoto = (body) => fetch(SERVERURL, {
  method: 'POST',
  body: body
});
