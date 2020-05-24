import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';

export default function NewMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className='latest'>Now in theaters:</h2>
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
      
    </>
  );
}
