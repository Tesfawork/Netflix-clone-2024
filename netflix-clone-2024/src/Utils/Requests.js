import React from "react";


const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language-en.us`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/topRated?api_key=${API_KEY}&language-en.us`,
  fetchActionMovies: `/discover/movie?/api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?/api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?/api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?/api_key=${API_KEY}&with_geners=10/49`,
  fetchDocumentaries: `/discover/movie?/api_key=${API_KEY}&with_geners=99`,
  fetchTvShow: `/tv/popular?/api_key=${API_KEY}&language-en.us&page=1`,
};

export default requests;
