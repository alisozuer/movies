import axios, { AxiosRequestConfig } from 'axios';

const service = axios.create({
  baseURL: process.env.BASE_URL || 'https://the-one-api.dev/v2',
  headers: {
    Authorization: 'Bearer Ola_C97fXLaqlHnjptLU',
  },
});
export default service;
