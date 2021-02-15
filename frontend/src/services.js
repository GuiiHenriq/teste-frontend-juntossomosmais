import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: "https://cors-anywhere.herokuapp.com/https://jsm-challenges.s3.amazonaws.com" // => DEVELOPMENT
  baseURL: "http://localhost:3000", // => PRODUCTION
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "x-total-count"
  }
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  }
}
