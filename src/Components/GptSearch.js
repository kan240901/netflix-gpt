import React ,{useRef} from 'react'
import {LoginBgImage, lang} from '../utils/Constants'
import { useSelector, useDispatch } from 'react-redux'
import { languageChange } from '../utils/UserSlice'
import { client } from '../utils/OpenAI';
import { api_get_options } from '../utils/Constants';
import { map } from 'firebase/firestore/pipelines';
import {gptMovieResult, gptOutputMovies} from '../utils/gptSlice'

const GptSearch = async() => {
  const langCode = useSelector((state) => state.user?.languageChange);
  const dispatch = useDispatch();
  
  const searchText = useRef('');

  const searchMovieTMDB = async(movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}`, api_get_options);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async() => {

    const response = await client.responses.create({
      model: 'gpt-5.4-mini',
      instructions: 'You are a movie recommendation assistant and suggest top 5 movies based on the user input. The user will provide a search query related to movies, TV shows, or genres, and you will respond with a list of 5 relevant movie recommendations. Example Ouput: Sholay, Gabbar, Andaz Apna Apna, Hera Pheri, Munna Bhai M.B.B.S.',
      input: '{searchText.current.value}',
    });

    const outputMovies = response.choices[0]?.message?.content.split(",");
    
    dispatch(gptOutputMovies(outputMovies));

    const promiseArray = outputMovies.map((movie)=>searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(gptMovieResult(tmdbResults));
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-[100%] mt-40 mx-auto flex items-center justify-center">
          <input ref={searchText} className="w-[30%] p-2 bg-black text-white placeholder:text-gray-500 border border-gray-600" type="text" placeholder={lang[langCode].SearchPlaceHolder} />
          <button onClick={handleGptSearchClick} className="bg-red-600 text-white py-2 px-4 mx-4 rounded hover:bg-red-700">{lang[langCode].SearchButton}</button>    
      </div>
    </div>
  )
}

export default GptSearch
