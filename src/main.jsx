import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/PublicRoutes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';


createRoot(document.getElementById('root')).render(
  <div className="bg-white">
    <StrictMode>
    <AuthProviders>
    <RouterProvider router={router}/>
    </AuthProviders>
  </StrictMode>
  </div>
)
