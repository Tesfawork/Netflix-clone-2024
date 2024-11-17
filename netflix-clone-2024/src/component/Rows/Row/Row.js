import React, { useEffect,useState } from 'react';
import "./row.css";
import axios from "../../../Utils/Axios";
import movieTrailer from "movie-trailer";
import youTube from "react-youTube";

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl)
                const request = await axios.get(`https://localhost:4000/api/${fetchUrl}`);
                console.log(request)
                setMovie(request.data.results);
            }
            catch (error) {
                console.log("Error,error");
            }
        })()
    }, [fetchUrl]);
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie ? original_name)
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    console.log(urlParams)
                    console, log(urlParams.get('v'))
                    setTrailerUrl(urlParams.get('v'));
            })
        }
    }
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
         autoPlay: 1,   
        },
    }


}
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">{movies?.map((movie, index) => {
                <img onClick={() => handleClick{ movie}}
                key = { index } src = {{base_url)${ isLargeRow ? movie.poster_path : movie.backdrop_path } `} alt={movie.name}
                className={`row_poster ${ isLargerRow && "row_posterLarge" }`
                }
                />
                
            }}}
            </div>
            <div style={{ padding: '40px' }}>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </div>
        )
            }

export default Row;
