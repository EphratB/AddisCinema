import React from "react";
import "./styles.scss";

function MyList({ movies }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500`;
  console.log(movies);
  return (
    <div className="container">
      <h1>My List</h1>
      {movies && movies.length > 0 ? (
        <div className="Mylist_container">
          {movies.map((movie, index) => (
            <div key={index} className="Mylist_detail">
              <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
              <div className="movie-details">
                <span className="movie-title">{movie.title}</span>
                <span className="movie-overview">{movie.overview}</span>
                <div>
                  <button>Like</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="Mylist_text">Your list is empty!</p>
      )}
    </div>
  );
}

export default MyList;
