import axios from 'axios';
// Add api key here
const KEY = '';

const config = {
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  },
  baseURL: 'https://www.googleapis.com/youtube/v3',
};
export default axios.create(config);
