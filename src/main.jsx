import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/PublicRoutes.jsx';


createRoot(document.getElementById('root')).render(
  <div className="bg-white">
    <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  </div>
)
