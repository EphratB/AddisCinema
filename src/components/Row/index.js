import { useEffect, useState } from "react";
import * as restAPI from "../../restapi";

import "./styles.scss";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await restAPI.read(fetchUrl);
      setLoading(true);
      if (result.success) {
        const movieList = result.data.results;
        setMovies(movieList);
      } else {
        setError(result.error);
      }
      setLoading(false);
    })();
  }, [fetchUrl]);

  return (
    <div className="rowContainer">
      <h2>{title}</h2>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="movieContainer">
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
        </div>
      )}
    </div>
  );
}

export default Row;
