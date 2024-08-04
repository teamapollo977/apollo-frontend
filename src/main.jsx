import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Landing from './Landing.jsx'
import Signup from './Signup.jsx'
import './index.css'
import RegisterIndividual from './RegisterIndividual.jsx'
import RegisterOrganization from './RegisterOrganization.jsx'
import Navbar from './components/navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signup/individual",
        element: <RegisterIndividual />,
      },
      {
        path: "/signup/organization",
        element: <RegisterOrganization />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
