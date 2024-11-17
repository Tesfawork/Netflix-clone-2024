import React, { useEffect, useState } from "react";
import axios from "../../Utils/Axios";
import request from "../../Utils/Requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => 
     try (() => {
      const request = await axios.get(request.fatchNetflixOriginals)
      setMovie(request.data.result[
        Maths.floor(math.random() * request.data.results.length)
      ]);
    })
    catch (error) {
        console.log("Error", Error);
      }
    }, []);
  };
  function trancate(src, n) {
    return str?.length > n ? str.substr(0, n + 1) + "..." : str;    
  }
  return (
    <div
      className="Banner" 
      style={{
        backgroundSize: "cover",
        backgroundImage: URL("https://image.tmdb.org/t/p/original.${movies?.backdrop_path"
        ),
        backgroundPosition: "center"
        backgroundRepeat: "no-repeat"
      }}>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title ||movie?.name|| movie?.origional_name}
        </h1>
        <div className="banner_button>
        <button className="banner_button play" > play </button>
       <button className="banner_button"> My List </button>
    </div>
    <h1 className="banner_description">{trucate(movie?.overview, 150)}</h1>
      </div >
        <div className="banner_fadeBottom"/>
    </div>
  );
};

export default Banner;
