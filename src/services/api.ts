import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://supershop-api-jean.herokuapp.com/',
});
