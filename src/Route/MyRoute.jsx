import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Mainlayout";
import Home from "../components/Home";
import AddJob from "../components/AddJob";
import MyPostedJob from "../components/MyPostedJob";
import MyBids from "../components/MyBids";
import BidRequest from "../components/BidRequest";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorElements from "../components/ErrorElements";
import AllJob from "../Pages/AllJob";

const MyRoute = createBrowserRouter([
    {
        path : '/',
        element : <Mainlayout></Mainlayout>,
        errorElement:<ErrorElements></ErrorElements>,
        children : [
            {
                path :'/',
               element : <Home></Home>
            },
            {
                path : '/addjob',
                element : <AddJob></AddJob>
            },
            {
                path:'/mypostedjob',
                element :<MyPostedJob></MyPostedJob>
            },
            {
                path : '/mybids',
                element:<MyBids></MyBids>
            },
            {
                path : '/bidrequest',
                element:<BidRequest></BidRequest>
            },
            {
                path : '/login',
                element:<Login></Login>
            },
            {
                path : '/register',
                element:<Register></Register>
            },
            {
                path : '/alljob',
                element:<AllJob></AllJob>,
                loader:()=>fetch('http://localhost:5000/getJob')
            },
        ]

    },
    
])

export default MyRoute;