import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";

const moviesAPI =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=730c60c94829d66ed0f0240656cb8e57&page=1";


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(moviesAPI)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="head">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setMovies={setMovies}
        />
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies?.map((item, i) => <Movie data={item} key={i} />)}
      </div>
    </div>
  );
}

export default App;
