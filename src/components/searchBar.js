import React from 'react'

function SearchBar(props) {
    return (
        <form className='form' onSubmit={props.searchMovies}>
        <label className='label' htmlFor='query'>
          Movie Name:
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='i.e. Jurassic Park'
          value={props.query}
         onChange={props.onChange}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
    )
}

export default SearchBar
