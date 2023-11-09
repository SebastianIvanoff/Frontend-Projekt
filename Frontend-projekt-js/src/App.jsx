import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { AuthProvider } from './context/AuthContext'
import Register from './Pages/Register'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index:true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
      ]
    }
  ])
  return (
    <>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </>
  )
}

export default App