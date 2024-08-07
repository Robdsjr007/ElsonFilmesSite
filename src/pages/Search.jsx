import {useState, useEffect} from 'react'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
  const { data: topMovies, loading, error } = useFetch(searchWithQueryUrl);

  useEffect(() => {
      setQuery(searchParams.get("q") || "")
  }, [query]);

  return (
    <main className='container'>
            <h2 className='title'>Resultados para: <span className="query-text">{query}</span> </h2>
            <section className='movies-container'>
                {loading && <p>Carregando...</p>}
                {error && <p>Ocorreu um erro: {error.message}</p>}
                {topMovies && topMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
           
           
            </section>
        </main>
  )
}

export default Search