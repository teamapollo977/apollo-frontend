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
import Signin from './Signin.jsx';
import Competition from './Competition.jsx';
import Dashboard from './Dashboard.jsx';
import History from './History.jsx';

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
        path: "/signin",
        element: <Signin />,
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
      {
        path: "/create-competition",
        element: <Competition />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/scoring",
        element: <h1>Scoring</h1>,
      },
      {
        path: "/competition",
        element: <h1>Competition</h1>,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/schedule",
        element: <h1>Schedule</h1>,
      },
      {
        path: "/my-club",
        element: <h1>My Club</h1>,
      },
      {
        path: "/analytics",
        element: <h1>Analytics</h1>,
      },
      {
        path: "/profile",
        element: <h1>Profile</h1>,
      },
      {
        path: "/settings",
        element: <h1>Settings</h1>,
      },
      {
        path: "/about",
        element: <h1>About Us</h1>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
