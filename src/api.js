import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

axios.defaults.headers.common['Authorization'] =
  'Client-ID WYGmq9ru5PENBultQneTNyNh7oXVzE6d9dzFLbQGODM';

export const fetchPhotoByQuery = async (query, page = 1) => {
  const response = await axios.get('/search/photos', {
    params: { query, page },
  });
  return response.data;
};
