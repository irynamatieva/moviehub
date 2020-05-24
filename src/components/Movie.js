import React, { useEffect, useState } from 'react';
import axios from 'axios';
import btn from '../btn.png'

function Movie({ match }) {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [video, setVideo] = useState({});
  const [search, setSearch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const movie_id = match.params.id;
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
      const url1 = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`;

      await axios
        .get(url)
        .then((res) => {
          setMovie(res.data);
          console.log(res.data);
        })
        .catch((err) => console.error(err));

      await axios
        .get(url1)
        .then((res) => {
          setCredits(res.data);
        })
        .catch((err) => console.error(err));

      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
        )
        .then((res) => setVideo(res.data.results[0]))
        .catch((err) => console.error(err));
    };
    fetchData();
  }, []);
  const date = new Date(movie.release_date);
  const year = date.getFullYear();

  const reduceObjects = (objects) => {
    return (
      objects &&
      objects.reduce((acc, obj, i) => {
        if (i === 0) {
          return obj.name;
        } else {
          return acc + ', ' + obj.name;
        }
      }, '')
    );
  };
  const director =
    credits.crew && credits.crew.find((item) => item.job === 'Director').name;
  const cast = credits.cast && credits.cast.slice(0, 5);

  return (
    <>
      <div className='movie'>
        <div className='poster'>
          <img
            src={`https://image.tmdb.org//t/p/w1280/${movie.poster_path}`}
            alt=''
          />
        </div>
        <div className='desc'>
          <h1>
            {movie.title} ({year}){' '}
            <span>
              <i className='star'></i> {movie.vote_average}
            </span>
          </h1>
          <p>{reduceObjects(movie.genres)} </p>
          <h3>Overview:</h3>
          <p>{movie.overview} </p>
          <h3>
            Director: <span> {director} </span>{' '}
          </h3>
          <h3>Stars: </h3> <p>{reduceObjects(cast)}</p>
          {video && (
            <iframe
              className='video'
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${video.key}`}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          )}
          <a
            className='amazon'
            target="_blank"
            href={`http://www.amazon.com/s/ref=nb_ss_d?tag=chriscoyier-20&url=search-alias%3Ddvd&field-keywords=${movie.title}`}>
            <img src={btn} alt=''></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Movie;
