"use client";

import { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies).catch(console.error);

    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (movieId) => {
    const updatedFavorites = favorites.includes(movieId)
      ? favorites.filter((id) => id !== movieId)
      : [...favorites, movieId];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <main style={{ padding: "1rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.episode_id}
            movie={movie}
            isFavorite={favorites.includes(movie.episode_id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </main>
  );
}
