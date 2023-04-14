import { useEffect, useState } from "react";
import * as restAPI from "../../.././restapi";
import "./styles.scss";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { MdTaskAlt } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import MyList from "../../../Pages/MyList";

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
      // https://developers.google.com/youtube/player_parameters
      autoplayer: 1,
    },
  };
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
  const handleClickk = (movie) => {
    handleAddSelectedMovie(movie); // call handleAddSelectedMovie function
    console.log("hello movies", movie);
  };

  return (
    <div className="row">
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
              {/* <AiOutlinePlaySquare /> */}
              <MdTaskAlt onClick={() => handleClickk(movie)} />
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
