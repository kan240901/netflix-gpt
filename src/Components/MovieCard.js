import React from 'react'
import { Img_CDN_Url } from '../utils/Constants'

const MovieCard = ({ movie }) => {
  return (
    <div className="w-[200px] flex-shrink-0 cursor-pointer">
      <img
        className="rounded-lg hover:scale-105 transition-transform duration-300"
        src={Img_CDN_Url + movie.poster_path}
        alt={movie.title}
      />
    </div>
  )
}

export default MovieCard
