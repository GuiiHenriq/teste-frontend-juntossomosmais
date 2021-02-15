import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
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
