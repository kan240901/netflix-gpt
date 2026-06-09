import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'

const Browse = () => {
  useNowPlayingMovies()
  const gptSearchClick = useSelector((state) => state.gptSearch?.gptSearchClick);

  return (
    <div className="min-h-screen w-full relative">
      <Header/>
      {gptSearchClick ?
         <GptSearchPage/>:(
            <>
              <MainContainer/>
              <SecondaryContainer/>
            </>
          )}
    </div>
  )
}

export default Browse
