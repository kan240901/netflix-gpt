import React from 'react'
import { addUser, removeUser } from '../utils/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/Firebase'
import { signOut } from 'firebase/auth'
import { Logo_Url, User_Logo } from '../utils/Constants'

const Header = ({ email }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
      })
      .catch((error) => {
        // Error signing out
      })
  }

  return (
    <div className="w-full px-8 py-8 flex items-center justify-between bg-gradient-to-b from-red-950 to-black bg-opacity-90">
      <img 
        src={Logo_Url} 
        alt="Netflix Logo" 
        className="h-10 w-auto object-contain"
      />
      {user && (
        <div className="flex items-center">
          <div className="text-red-500 font-semibold ml-4">Welcome,  {user.displayName}</div>
          <img src={User_Logo(email)} alt="User Icon" className="h-16 w-16 rounded-full ml-4 mx-14"/>
          <button onClick={handleSignOut} className="text-red-500 hover:text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
