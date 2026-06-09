import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const gptMovieSuggestion = useSelector((state) => state.gptSearch?.gptMovies);
  const gptOutputMovies = useSelector((state) => state.gptSearch?.gptOutputMovies);
  console.log(gptMovieSuggestion)
  
  if (!gptMovieSuggestion) return null;
  
  return (
    <div className='-my-96'>
      {gptMovieSuggestion.map((movies, index) => (
        <MovieList movies={movies} title={gptOutputMovies[index]} />
      ))}
    </div>
  )
}

export default GptMovieSuggestions
