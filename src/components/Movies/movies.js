import React from "react";
import Movie from "./Movie/movie";
import { requests } from "../../restapi";

function Movies({ handleAddSelectedMovie }) {
  return (
    <div>
      <Movie
        title="ADDIS CINEMA ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        className="netflix__originals"
      />
      <Movie
        title="Trending"
        fetchUrl={requests.fetchTrending}
        handleAddSelectedMovie={handleAddSelectedMovie}
      />
      <Movie title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Movie title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Movie title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Movie title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Movie title="OnTv" fetchUrl={requests.fetchTv} /> */}
    </div>
  );
}

export default Movies;
