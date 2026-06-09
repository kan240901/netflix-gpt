import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    return (
        <div className="w-screen py-8 bg-black h-full">
            <div className="mt-6 sm:-mt-52">
                <MovieList movies={movies} title="Now Playing" />
                <MovieList movies={movies} title="Now Playing" />
                <MovieList movies={movies} title="Now Playing" />
                <MovieList movies={movies} title="Now Playing" />
                <MovieList movies={movies} title="Now Playing" />
            </div>
        </div>
    )
}

export default SecondaryContainer
