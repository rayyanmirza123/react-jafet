import axios from 'axios';

const fetchGeos = (callback) => {
  return axios.get('http://localhost:8080/utils/fetch_geos');
};


export default fetchGeos;
