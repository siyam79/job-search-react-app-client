import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Mainlayout";
import Home from "../components/Home";
import AddJob from "../components/AddJob";
import MyPostedJob from "../components/MyPostedJob";
import MyBids from "../components/MyBids";

import Login from "../components/Login";
import Register from "../components/Register";
import ErrorElements from "../components/ErrorElements";
import PrivateRoute from "../Provider/PrivateRoute";
import JobDetails from "../components/JobDetails";
import UpdateJob from "../Pages/PostedJob/UpdateJob";

import BidRequests from "../components/BidRequest";

const MyRoute = createBrowserRouter([
   
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorElements></ErrorElements>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assingment-server-11-henna.vercel.app/getJob')
            },
            {
                path: '/addjob',
                element: <PrivateRoute> <AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/mypostedjob',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path: '/mybids',
                element:<PrivateRoute> <MyBids></MyBids></PrivateRoute>
               
            },
            {
                path: '/bidrequest',
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
               loader : ()=>fetch('https://assingment-server-11-henna.vercel.app/reqJob')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
               loader: ({params}) => fetch(`https://assingment-server-11-henna.vercel.app/job/${params.id}`)
            },
            {
                path: '/updateJob/:id',
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
               loader: ({params}) => fetch(`https://assingment-server-11-henna.vercel.app/job/${params.id}`)
            },
           


        ]

    },

])

export default MyRoute;