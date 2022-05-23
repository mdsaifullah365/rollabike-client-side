import axios from 'axios';

// const url = "http://localhost:5000";
const url = 'https://roll-a-bike.herokuapp.com';
const axiosPrivate = axios.create({
  baseURL: url,
  headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` },
});

export default axiosPrivate;
