import axios from "axios";
import { baseURL } from "../baseURL/baseURL";

const axiosPrivate = axios.create({
  baseURL,
  headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` },
});

export default axiosPrivate;
