import React, { Suspense, lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

// Lazy load page components
const Browse = lazy(() => import('./Browse'))
const Login = lazy(() => import('./Login'))

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-black">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
  </div>
)

const checkAuth = (user, path) => {
  // While checking auth state
  if (user === undefined) {
    return <LoadingSpinner />
  }

  // User not logged in
  if (!user && path !== "/") {
    return <Navigate to="/" replace />
  }

  // User logged in but trying to access login page
  if (user && path === "/") {
    return <Navigate to="/browse" replace />
  }

  return null
}

const Body = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
  const [authLoading, setAuthLoading] = React.useState(true)

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate loading delay
      if (currentUser) {
        // User is logged in - store in Redux
        const { uid, email, displayName } = currentUser
        dispatch(addUser({ uid, email, displayName }))
      } else {
        // User is logged out - remove from Redux
        dispatch(removeUser())
      }
      setAuthLoading(false)
    })

    // Cleanup subscription
    return () => unsubscribe()
  }, [])

  if (authLoading) {
    return <LoadingSpinner />
  }

  const appRouter = createBrowserRouter([
        {
          path: "/",
          element: (
            <>
              {checkAuth(user, "/")}
              <Suspense fallback={<LoadingSpinner />}>
                <Login />
              </Suspense>
            </>
          )
        },
        {
          path: "/browse",
          element: (
            <>
              {checkAuth(user, "/browse")}
              <Suspense fallback={<LoadingSpinner />}>
                <Browse />
              </Suspense>
            </>
          )
        },
        {
          path: "*",
          element: <Navigate to="/" replace />
        }
      ])

    return <RouterProvider router={appRouter} />
}

export default Body
