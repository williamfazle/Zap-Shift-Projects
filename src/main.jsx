import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router";
import { router } from './router/router';
import 'aos/dist/aos.css';
import Aos from 'aos';
import AuthProvider from './contexts/AuthContext/AuthProvider';

 Aos.init();
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-7xl mx-auto'>
       <AuthProvider>
         <RouterProvider router={router} />
       </AuthProvider>
    </div>
   
  </StrictMode>,
)
