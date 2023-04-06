import { useEffect, useState } from "react";
import * as restAPI from "../../restapi";

import "./styles.scss";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  //read the data from API
  useEffect(() => {
    (async () => {
      const result = await restAPI.read();
      // setLoading(true);
      if (result.sucess) {
        //do something
        const movieList = result.data.results;
        setMovies(movieList);
        //setLoading(false);
        console.log("movies", movieList);
      } else {
        setError(result.error);
      }
      // setLoading(false);
    })();
  }, []);

  return (
    <div className="rowContainer">
      <h2>Popular Movies</h2>

      {error && error}
      <div className="movieContainer">
        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {movie.title}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                  width={120}
                  height={100}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Row;
