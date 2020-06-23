import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://itunes.apple.com',
});


export default api;
