import styles from './Movies.module.css';
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";
import MovieCard from '../../components/MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movies = () => {
  const { id } = useParams();
  const movieUrl = `${moviesUrl}${id}?${apiKey}`;
  const { data: movie, loading, error } = useFetch(movieUrl);

const formatCurrency = (number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

  return (
    <main className={styles.moviePage}>
      {loading && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro: {error.message}</p>}
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false}/>
          <p className="tagLine">{movie.tagLine}</p>
          <section className={styles.info}>
            <h3>
              <BsWallet2/> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </section>
          <section className={styles.info}>
            <h3>
              <BsGraphUp/> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </section>
          <section className={styles.info}>
            <h3>
              <BsHourglassSplit/> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </section>
          <section className={`${styles.info} description`}>
            <h3>
              <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{movie.overview} minutos</p>
          </section>
        </>
      )}
        
    </main>
  );
}

export default Movies;
