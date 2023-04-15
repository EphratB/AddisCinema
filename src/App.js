import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
// import Row from "./components/Row";
// import { requests } from "./restapi";
import Movies from "./components/Movies/movies";
import PageNotFound from "./Pages/PageNotFound";
import PageLoader from "./components/PageLoader";
import MyList from "./Pages/MyList";
// import {db} from "./database/config";
import * as database from "./database";
import TvShows from "./Pages/TvShows";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setSelectedMovies] = useState([]);

  const AddSelectedMovie = (movie) => {
    setSelectedMovies([...movies, movie]);
  };

  useEffect(() => {
    // load the database

    // IIFE immediately Invoked fucntion expression

    (async () => {
      const data = await database.load();
      console.log("Loading database", data);
      //seting data from database
      setSelectedMovies(data);
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className="app">
      {isLoading ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Header />
                <Movies handleAddSelectedMovie={AddSelectedMovie} />
                <Footer />
              </>
            }
          />
          <Route
            path="/mylist"
            element={
              <>
                <Nav />
                <Header />
                <MyList movies={movies} />
                <Footer />
              </>
            }
          />
          <Route
            path="/tvshows"
            element={
              <>
                <Nav />
                <Header />
                <TvShows />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Nav />
                <PageNotFound />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
