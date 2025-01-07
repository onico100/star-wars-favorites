import styles from "../styles/MovieCard.module.css";

const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.card}>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Director: {movie.director}</p>
      <button
        className={isFavorite ? styles.favorite : ""}
        onClick={() => toggleFavorite(movie.episode_id)}
      >
        {isFavorite ? "Unmark Favorite" : "Mark as Favorite"}
      </button>
    </div>
  );
};

export default MovieCard;
