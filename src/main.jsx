import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner';
import './index.css'

import Landing from './Landing.jsx'
import Signup from './Signup.jsx'
import RegisterIndividual from './RegisterIndividual.jsx'
import RegisterOrganization from './RegisterOrganization.jsx'
import Navbar from './components/navbar.jsx';
import Signin from './Signin.jsx';
import CreateCompetition from './CreateCompetition.jsx';
import Dashboard from './Dashboard.jsx';
import History from './History.jsx';
import Schedule from './Schedule.jsx';
import AuthProvider from './components/authProvider.jsx';
import ProtectedRoute from './components/protectedRoute.jsx';
import ScoreSheet from './components/scoreSheet/scoreSheet.jsx';
import Analytics from './Analytics.jsx';
import PendingUsers from './PendingUsers.jsx';
import PendingClubs from './PendingClubs.jsx';
import InviteClub from './InviteClub.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';

const queryClient = new QueryClient();

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
        element: <ProtectedRoute loggedOutOnly>
          <Signin />
        </ProtectedRoute>,
      },
      {
        path: "/signup",
        element: <ProtectedRoute loggedOutOnly>
          <Signup />
        </ProtectedRoute>,
      },
      {
        path: "/signup/individual",
        element: <ProtectedRoute loggedOutOnly>
          <RegisterIndividual />
        </ProtectedRoute>,
      },
      {
        path: "/signup/organization",
        element: <ProtectedRoute loggedOutOnly>
          <RegisterOrganization />
        </ProtectedRoute>,
      },
      {
        path: "/create-competition",
        element: <ProtectedRoute allowedRoles={["Admin", "Club President"]}>
          <CreateCompetition />
        </ProtectedRoute>,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>,
      },
      {
        path: "/scoring",
        element: <ProtectedRoute>
          <ScoreSheet />
        </ProtectedRoute>,
      },
      {
        path: "/upcoming-events",
        element: <ProtectedRoute>
          <UpcomingEvents />
        </ProtectedRoute>,
      },
      {
        path: "/history",
        element: <ProtectedRoute>
          <History />
        </ProtectedRoute>,
      },
      {
        path: "/schedule",
        element: <ProtectedRoute>
          <Schedule />
        </ProtectedRoute>,
      },
      {
        path: "/analytics",
        element: <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>,
      },
      {
        path: "/pending-users",
        element: <ProtectedRoute allowedRoles={["Admin", "Club President"]}>
          <PendingUsers/>
        </ProtectedRoute>,
      },
      {
        path: "/admin/pending-clubs",
        element: <ProtectedRoute allowedRoles={["Admin"]}>
          <PendingClubs/>
        </ProtectedRoute>,
      },
      {
        path: "/admin/invite-club",
        element: <ProtectedRoute allowedRoles={["Admin"]}>
          <InviteClub/>
        </ProtectedRoute>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router}/>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
