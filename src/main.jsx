import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/Applied_Jobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element : <AppliedJobs></AppliedJobs>,
        loader : () => fetch('../jobs.json') //warning: it is not a perfect way to load data
        
      },
      {
        path: '/job/:id',
        element : <JobDetails></JobDetails>,
        loader : () => fetch('../jobs.json')//warning: it is not a perfect way to load data
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    
  </React.StrictMode>,
)
