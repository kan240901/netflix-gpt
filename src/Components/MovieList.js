import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = ({movies, title }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="w-full px-4 py-8 group">
        <h2 className="text-white text-xl font-bold mb-4 px-4">{title}</h2>
        <div className="relative flex items-center">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white z-10 px-3 py-12 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ❮
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-hidden px-4 space-x-4 scroll-smooth w-full"
          >
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white z-10 px-3 py-12 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            ❯
          </button>
        </div>
    </div>
  )
}

export default MovieList
