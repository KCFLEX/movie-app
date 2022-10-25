import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

// be03be13

const API_URL = "http://www.omdbapi.com?apikey=be03be13";



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (year) => {
    const response = await fetch(`${API_URL}&s=${year}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("2020");
  }, []);

  return (
    <div className="app">
      <h1>VinnyMovies</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="sbutton" onClick={() => searchMovies(searchTerm)}>
          Search
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
