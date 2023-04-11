import { useEffect, useState } from "react";
import * as restAPI from "../../.././restapi";
import "./styles.scss";

function Movie({ title, fetchUrl, isLargeRow, className }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;
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
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="movie_poster">
            <img
              className={`row__poster ${
                isLargeRow ? "netflix__originals" : ""
              } ${className}`}
              src={`${imageUrl}${
                movie.poster_path
                // isLargeRow ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.title}
            />
            <button>Watch now</button>
          </div>
        ))}
      </div>
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
