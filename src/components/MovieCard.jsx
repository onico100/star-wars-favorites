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
    <div className={lato.className}>
      <div className={styles.card}>
        <h2 className={roboto.className}>{movie.title}</h2>
        <p>Episode: {movie.episode_id}</p>
        <p>Release Date: {movie.release_date}</p>
        <p> Director: {movie.director}</p>
        <button onClick={() => toggleFavorite(movie.episode_id)}>
          {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
