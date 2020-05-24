import React from 'react';
import { Link } from 'react-router-dom';
function movieCard({ movie }) {
  const d = new Date(movie.release_date);
 
  const releaseDate = d.getFullYear();
  return (
    <div className='card'>
      <Link to={`/${movie.id}`}>
        <img
          className='card--image'
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          alt={movie.title + ' poster'}
        />
      </Link>
       <div className='card--content'>
        <h3 className='card--title'>{movie.title}</h3>
        <p>{releaseDate}</p>

       
      </div> 
    </div>
  );
}

export default movieCard;
