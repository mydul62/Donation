import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Root/Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Donation from './pages/Donation/Donation.jsx'
import Statistics from './pages/Statistics/Statistics.jsx'
import CategoryDetails from './Components/CategoryDetails/CategoryDetails.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/categoryDetails/:id",
        element:<CategoryDetails></CategoryDetails>
      },
      {
        path:"/donation",
        element:<Donation/>
      },
      {
        path:"/statistics",
        element:<Statistics/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
