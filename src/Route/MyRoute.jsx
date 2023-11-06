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
import PrivateRoute from "../Provider/PrivateRoute";
import JobDetails from "../components/JobDetails";




const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorElements></ErrorElements>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/getJob')
            },
            {
                path: '/addjob',
                element: <PrivateRoute> <AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/mypostedjob',
                element: <MyPostedJob></MyPostedJob>
            },
            {
                path: '/mybids',
                element: <MyBids></MyBids>
               
            },
            {
                path: '/bidrequest',
                element: <BidRequest></BidRequest>
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
                element: <JobDetails></JobDetails>,
               loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
            },


        ]

    },

])

export default MyRoute;