/* eslint-disable import/no-mutable-exports */
// Import Services
import axiosInterceptors from './axiosInterceptors';
// ----------------------------------------------------------------------
const baseURL = 'https://api.themoviedb.org/3/';
const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzUzZTg1OTFlMjlkODRiN2FlNTdiNDYzZjE1ZWFlOCIsInN1YiI6IjY0OTQzZTdhZTIyZDI4MDE0NTNjZDU1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjxrWQJzRRTcsldLFBeLaTMMrOg-nZ8PbH-muRZ8KWY',
};
const axiosInstance = axiosInterceptors.create({
  baseURL,
  headers,
});

export default axiosInstance;
