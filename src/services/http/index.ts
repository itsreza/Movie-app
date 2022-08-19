import axios from 'axios';
const APP_TOKEN = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_API_BASE_URL
// API URL With Token
const CREATED_API_WITH_APP_TOKEN = `${BASE_URL}${APP_TOKEN}`;

export const getRequestMethod = (url: string) => {
  return axios.get(`${CREATED_API_WITH_APP_TOKEN}${url}`);
};
