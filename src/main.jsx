import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './routes/homepage/homepage';
import DashboardPage from './routes/dashboard/dashboardPage';
import Chatpage from './routes/chatPage/chatPage';
import RootLayout from './layouts/rootLayout/rootLayout';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';
import SignInPage from './routes/signInPage/signInPage';
import SignUpPage from './routes/signUpPage/signUpPage';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Homepage />,
      },
      {
        path:"/sign-in/*",
        element:<SignInPage />,
      },
      {
        path:"/sign-up/*",
        element:<SignUpPage />,
      },
      {
        element:<DashboardLayout />,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage />
          },
          {
            path:"/dashboard/chats/:id",
            element:<Chatpage />
          }
        ]
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
