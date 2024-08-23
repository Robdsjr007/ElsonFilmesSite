import '../MovieGrid.css';
import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import { useFetch } from '../../hooks/useFetch';
import styles from './Home.module.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMoviesUrl, setTopMoviesUrl] = useState(null);
    const { data: topMovies, loading, error } = useFetch(topMoviesUrl);

    useEffect(() => {
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`;
        setTopMoviesUrl(topRateUrl);
    }, []);

    return (
        <main className={styles.container}>
            <h2 className='title'>Melhores Filmes:</h2>
            <section className='movies-container'>
                {loading && <p>Carregando...</p>}
                {error && <p>Ocorreu um erro: {error.message}</p>}
                {topMovies && topMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </section>
        </main>
    );
}

export default Home;
