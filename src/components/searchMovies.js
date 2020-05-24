import React, { useState } from 'react';
import MovieCard from './movieCard';
import NewMovies from './newMovies';
import SearchBar from './searchBar';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
     // console.log(data.results);
      setMovies(data.results);
      setSearch(true);
    } catch (err) {
      console.error(err);
    }
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(movies.length)
  return (
    <>
      <SearchBar searchMovies={searchMovies} onChange={onChange} />
      {!search ? (
        <NewMovies />
      ) :
      movies.length === 0 ? (<h4 className='noMovies'>No movies found</h4>)
      : (
        <div className='card-list'>
          {movies
            .filter((movie) => movie.poster_path)
            .sort(
              (a, b) =>
                new Date(b.release_date).getFullYear() -
                new Date(a.release_date).getFullYear()
            )
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      )}
    </>
  );
}
