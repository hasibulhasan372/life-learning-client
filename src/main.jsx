import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
<AuthProvider>
<Toaster></Toaster>
     <RouterProvider router={router} />
</AuthProvider>
  
   
  </React.StrictMode>,
)
