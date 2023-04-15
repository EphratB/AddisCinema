import React, { useState } from "react";
import "./styles.scss";
import { SiCircle } from "react-icons/si";

function MyList({ movies }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;
  const [error, setError] = useState("");

  return (
    <>
      <div className="container">
        <h1>My List</h1>
        {movies && movies.length > 0 ? (
          <div className="movies-container">
            {movies.map((movie, index) => (
              <div className="movie-card" key={index}>
                <img
                  src={`${imageUrl}${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="rating-circle">
                  <SiCircle />
                  <div className="rating-number">{movie.vote_average}</div>
                </div>
                {/* release date:{movie.release_date} */}
                {/* <div>
                  <button className="like">Like</button>
                  <button className="dislike">Dislike</button>
                </div> */}
              </div>
            ))}
          </div>
        ) : (
          <p className="Mylist_text">Your list is empty!</p>
        )}
      </div>
    </>
  );
}

export default MyList;
