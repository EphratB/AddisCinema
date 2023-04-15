import { useEffect, useState } from "react";
import * as restAPI from "../../.././restapi";
import "./styles.scss";
import * as database from "./../../.././database";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { GrAddCircle } from "react-icons/gr";
import { GrCheckmark } from "react-icons/gr";

function Movie({
  title,
  fetchUrl,
  isLargeRow,
  className,
  handleAddSelectedMovie,
}) {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [error, setError] = useState("");
  const [addedToList, setAddedToList] = useState(false);
  const [isMovieAlreadyAdded, setIsMovieAlreadyAdded] = useState(false);
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
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplayer: 1,
    },
  };

  // fucntion that handles to show the movie trailer

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const handleAddToList = async (movie) => {
    setIsMovieAlreadyAdded("");
    const { title, id, vote_average, backdrop_path } = movie;

    // check if movie with same ID already exists in database

    const existingMovie = await database.get(id);
    if (existingMovie) {
      setIsMovieAlreadyAdded("Movie already exists in your list");

      return;
    }

    handleAddSelectedMovie(movie); // call handleAddSelectedMovie function

    //saving it to database
    const savemovie = await database.save({
      title,
      id,
      vote_average,
      backdrop_path,
    });
    console.log("save me", savemovie);
  };

  const handleIconChange = () => {
    setAddedToList(!addedToList);
  };

  return (
    <div className="row">
      {movies.length !== 0 && <p>{isMovieAlreadyAdded}</p>}
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="movie_poster">
            <img
              onClick={() => handleClick(movie)}
              className={`row__poster ${
                isLargeRow ? "netflix__originals" : ""
              } ${className}`}
              src={`${imageUrl}${
                movie.poster_path
                // isLargeRow ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.title}
            />

            <div className="controllers">
              {title === "Trending" && (
                <>
                  <div
                    className="my-list-btn"
                    onClick={() => handleAddToList(movie)}
                  >
                    <p onClick={handleIconChange}>My List</p>
                    {addedToList ? (
                      <GrCheckmark className="my-list-btn" />
                    ) : (
                      <GrAddCircle className="my-list-btn" />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {trailerUrl ? (
        <YouTube videoId={trailerUrl} opts={opts} />
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default Movie;

// import { useEffect, useState } from "react";
// import * as restAPI from "../../.././restapi";
// import "./styles.scss";

// function Movie({ title, fetchUrl }) {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const result = await restAPI.read(fetchUrl);
//       setLoading(true);
//       if (result.success) {
//         const movieList = result.data.results;
//         setMovies(movieList);
//       } else {
//         setError(result.error);
//       }
//       setLoading(false);
//     })();
//   }, [fetchUrl]);

//   return (
//     //row
//     <div className="MovieContainer">
//       <h2>{title}</h2>
//       {error && <p>{error}</p>}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         //row_posters
//         <div className="movie_posters">
//           <ul>
//             {movies.map((movie) => (
//               <li key={movie.id}>
//                 {movie.title}
//                 {/* row_poster */}
//                 <div className="image_posters">
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                     alt={movie.title}
//                   />
//                 </div>

//                 <button>Click me</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Movie;
