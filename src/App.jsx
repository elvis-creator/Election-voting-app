import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Results from './Pages/Results';
import Candidates from './Pages/Candidates';
import Congrats from './Pages/Congrats';
import Election from './Pages/Election';
import ElectionDetails from './Pages/ElectionDetails';
import Logout from './Pages/Logout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'results',
        element: <Results/>
      },
      {
        path: 'election/:id/candidates',
        element: <Candidates/>
      },
      {
        path: 'congrats',
        element: <Congrats/>
      },
      {
        path: 'election',
        element: <Election/>
      },
      {
        path: 'election/:id',
        element: <ElectionDetails/>
      },
      {
        path: 'logout',
        element: <Logout/>
      },
    
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;