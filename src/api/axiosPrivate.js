import axios from "axios";

const local = "http://localhost:5000";
// const heroku = "https://roll-a-bike.herokuapp.com";
const axiosPrivate = axios.create({
  baseURL: local,
  headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});

export default axiosPrivate;
