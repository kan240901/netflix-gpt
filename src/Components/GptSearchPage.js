import React from 'react'
import GptSearch from './GptSearch'
import GptMovieSuggestions from './GptMovieSuggestions'
import {LoginBgImage} from '../utils/Constants'

const GptSearchPage = () => {
  return (
    <div className=''>
      <div className='w-screen h-screen relative'>
          <div>
            <img src={LoginBgImage} alt="Background" className="w-screen h-screen object-cover -z-10 fixed  " />
          </div>
          <GptSearch/>
          <GptMovieSuggestions/>
      </div>
      
    </div>
  )
}

export default GptSearchPage
