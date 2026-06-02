import React, {useState } from 'react'
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signUp, setSignUp] = useState("Sign In");
  const [name, setName] = useState('');

  // Validate email format
  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    
    if (value && !isValidEmail(value)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (!email || !password || (signUp === "Sign Up" && !name)) {
      setError('All fields are required')
      return
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if(signUp === "Sign Up") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          // Update display name - wait for it to complete
          try {
            await updateProfile(user, {
              displayName: name
            });
            
            // Reload user to get updated displayName - wait for it to complete
            await user.reload();
            
            // Clear form only after everything is done
            setEmail('');
            setPassword('');
            setName('');
            setError('');
            
            // Return success - this ensures onAuthStateChanged fires after all updates
            return Promise.resolve();
          } catch (error) {
            throw error;
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
    else{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setEmail('')
          setPassword('')
          setError('')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError("Invalid email or password, please try again. Thank you.");
        });
    }
    
  }

  const toggleSignInForm = () => {
    // Logic to toggle between sign in and sign up forms
    setSignUp(signUp === "Sign Up" ? "Sign In" : "Sign Up");
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-950 to-black">
      <Header email={email} />
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center mt-16 space-y-4'>
                <div className='text-white text-4xl font-bold'>Enter your info to {signUp}</div>
                {signUp === "Sign Up" && (
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='First Name' 
                    className='w-full max-w-md px-4 py-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2 rounded-lg' 
                    />
                )}
                <input 
                type="text" 
                value={email}
                onChange={handleEmailChange}
                placeholder='Phone number or email' 
                className='w-full max-w-md px-4 py-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2 rounded-lg' 
                />
                <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' 
                className='w-full max-w-md px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-2' 
                />
                {error && <p className='text-red-400 text-sm'>{error}</p>}
                <button 
                type="submit" 
                className='w-full max-w-md px-4 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300'
                >
                {signUp}
                </button>
                <p className='text-white text-sm'>
                 {signUp === "Sign Up" ? "Already have an account?" : "New to Netflix?"} <a className='text-red-600 hover:underline hover:cursor-pointer' onClick={toggleSignInForm}>
                    {signUp === "Sign Up" ? "Sign In" : "Sign Up"}
                  </a>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login
