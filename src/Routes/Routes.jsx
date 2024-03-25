import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import CategoryDetails from "../Components/CategoryDetails/CategoryDetails";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";


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

export default router;