import axios from 'axios';

const API_KEY = '21267272-08966beac0f37e240d5ba245f';

const pixabayAPI = axios.create({
  baseURL: 'https://pixabay.com',
});

export const fetchImages = async ({ query, page, perPage }) => {
  return pixabayAPI.get('/api/', {
    params: {
      key: API_KEY,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });
};
