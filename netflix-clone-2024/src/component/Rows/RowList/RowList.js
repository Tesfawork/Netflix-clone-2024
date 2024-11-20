import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

const rows = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  { title: "Trending Now", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRatedMovies },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "TV Shows", fetchUrl: requests.fetchTvShow },
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
];

const RowList = () => {
  return (
    <div className="row-list">
      {rows.map((row, index) => (
        <Row
          key={index}
          title={row.title}
          fetchUrl={row.fetchUrl}
          isLargeRow={row.isLargeRow}
        />
      ))}
    </div>
  );
};

export default RowList;
