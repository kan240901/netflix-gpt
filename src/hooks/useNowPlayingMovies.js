import { useEffect } from 'react';
import { api_get_options } from '../utils/Constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      const nowPlayingMovies = async () => {
        try {
          const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

          const moviesData = await fetch(url, api_get_options)
          
          if (!moviesData.ok) {
            return  
          }
          
          const movies = await moviesData.json()
          dispatch(addNowPlayingMovies(movies.results));
        } catch (error) {
          // Error fetching movies
        }
      }

      nowPlayingMovies()
    }, [])
}