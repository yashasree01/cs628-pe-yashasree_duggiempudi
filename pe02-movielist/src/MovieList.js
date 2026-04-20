import React, { useState } from "react";

function MovieList() {
  const [movies] = useState([
  { title: "Harry Potter", genre: "Fantasy", releaseYear: 2001 },
  { title: "The Conjuring", genre: "Horror", releaseYear: 2012 },
  { title: "Avengers: Endgame", genre: "Action", releaseYear: 2019 },
  { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
  { title: "Twilight", genre: "Fiction", releaseYear: 2003 },
  { title: "It", genre: "Horror", releaseYear: 2017 },
  { title: "The Notebook", genre: "Romance", releaseYear: 2004 },
  { title: "Jurassic Park", genre: "Science Fiction", releaseYear: 1998 }
]);

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(title);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>

      <div className="filter-section">
        <label htmlFor="genre">Filter by Genre: </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;