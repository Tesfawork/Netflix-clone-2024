import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie || {});
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    };
    fetchRandomMovie();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name || "Untitled"}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button my-list">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview || "No description available.", 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </div>
  );
};

export default Banner;
