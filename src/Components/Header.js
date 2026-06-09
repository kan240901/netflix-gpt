import {React, useState} from 'react'
import { addUser, removeUser, languageChange } from '../utils/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/Firebase'
import { signOut } from 'firebase/auth'
import { Logo_Url, User_Logo, languages } from '../utils/Constants'
import { gptSearchClick as toggleGptSearch } from '../utils/gptSlice'

const Header = ({ email }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const gptSearchClick = useSelector((state) => state.gptSearch?.gptSearchClick);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
      })
      .catch((error) => {
        // Error signing out
      })
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch(!gptSearchClick))
  }

  const handleLanguageChange = (e) => {
    dispatch(languageChange(e.target.value))
  }

  return (
    <div className={`flex-col w-full px-8 py-8 flex items-center justify-between absolute top-0 left-0 z-50 ${!user ? 'bg-gradient-to-b from-black to-red-950' : 'bg-black sm: bg-none'} sm:flex-row`}>
      <img 
        src={Logo_Url} 
        alt="Netflix Logo" 
        className="h-10 w-auto object-contain"
      />
      {user && (
        <div className="flex items-center mt-4 sm:mt-0">
          {gptSearchClick && (
            <select onChange={handleLanguageChange} className="bg-black text-white border border-gray-600 rounded-lg px-2 py-2 mr-4">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>)}
          <button onClick={handleGptSearchClick} className="bg-purple-900 rounded-lg text-red-500 hover:text-white cursor-pointer px-4 py-2 flex items-center gap-2">
              {gptSearchClick ? 'Home' : 'GPTSearch'}
          </button>
          <img src={User_Logo(email)} alt="User Icon" className="h-16 w-16 rounded-full ml-10 hidden sm:block"/>
          <button onClick={handleSignOut} className="text-red-500 hover:text-white cursor-pointer py-2 px-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
