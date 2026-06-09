import React from 'react'
import { Img_CDN_Url } from '../utils/Constants'

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[200px] h-[auto] rounded-lg cursor-pointer">
      <img src={Img_CDN_Url + movie.poster_path} alt={movie.title} />
    </div>
  )
}

export default MovieCard
