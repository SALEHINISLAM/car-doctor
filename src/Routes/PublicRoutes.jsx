import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Orders from "../Pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoutes><CheckOut/></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:3000/service/${params.id}`)
            },
            {
                path:`/service/:id`,
                element:<ServiceDetails/>,
                loader: ({params})=>fetch(`http://localhost:3000/service/${params.id}`)
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/orders',
        element:<PrivateRoutes><Orders/></PrivateRoutes>
    }
])

export default router;