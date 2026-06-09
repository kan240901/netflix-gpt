import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    const mainMovie = movies ? movies[0] : null;
    if (!mainMovie) return;
    console.log(mainMovie);

    const{original_title, overview ,id} = mainMovie;

  return (
    <div className="w-screen aspect-video relative">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} description={overview} />
    </div>
  )
}

export default MainContainer
