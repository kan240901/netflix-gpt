import React from 'react'
import { useEffect } from 'react'
import { api_get_options } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../utils/movieSlice'

const VideoBackground = ({ movieId }) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const dispatch = useDispatch();
    const trailer = useSelector((state) => state.movies?.movieTrailer);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const videoData = await fetch(url, api_get_options);
                if (!videoData.ok) {
                    return;
                }
                const video = await videoData.json();
                const trailer = video.results.find((vid) => vid.type === 'Trailer' && vid.site === 'YouTube');
                console.log(trailer);

                if(!trailer) {
                    trailer = video.results[0];
                }

                dispatch(addMovieTrailer(trailer));

            } catch (error) {
                // Error fetching video
            }
        }
        fetchVideo();
    }, [movieId])

  return (
    <div className='w-screen h-screen flex top-0 left-0 absolute overflow-hidden -z-10'>
      {trailer && (
        <iframe className='w-full h-full'
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&fs=0&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`} 
        title="YouTube video player" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      )}
    </div>
  )
}

export default VideoBackground
