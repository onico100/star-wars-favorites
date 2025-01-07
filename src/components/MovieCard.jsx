import styles from "../styles/MovieCard.module.css";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { Poppins, Lato } from "next/font/google";

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights (optional)
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.card}>
      <h2 className={roboto.className}>{movie.title}</h2>
      <p className={lato.className}>Episode: {movie.episode_id}</p>
      <p className={lato.className}>Release Date: {movie.release_date}</p>
      <p className={lato.className}> Director: {movie.director}</p>
      <button
        className={isFavorite ? styles.favorite : ""}
        onClick={() => toggleFavorite(movie.episode_id)}
      >
        {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
      </button>
    </div>
  );
};

export default MovieCard;
