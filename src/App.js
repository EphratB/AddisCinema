import Nav from "./components/Nav";
import Header from "./components/Header";
// import Row from "./components/Row";

// import { requests } from "./restapi";
import Movies from "./components/Movies/movies";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Header */}
      <Header />
      {/* Header */}

      {/* <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
      <Movies />
    </div>
  );
}

export default App;
