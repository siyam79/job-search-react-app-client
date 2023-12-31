import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import BidsTable from "../Pages/BidsTable";
// import { Link } from "react-router-dom";


const MyBids = () => {
    const { user } = useAuth()
    console.log(user);

    const [bids, setBids] = useState([])

    const url = `https://assingment-server-11-henna.vercel.app/bidJobs?email=${user?.email}`

    useEffect(() => {
        fetch(url , {credentials:"include"})
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])

    console.log(bids);
    useEffect(() => {
        document.title = " Job Search | My Bids ";
    }, []);

    

    return (
        <div className=" w-full py-10  mx-auto duration-300">
            <body className="flex items-center justify-center">
                <div className="container duration-300">
                    <div className="w-full mx-auto  rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                        <div className=" xl:block  duration-300">
                            <div className="flex  items-center justify-between font-semibold border border-gray-100 lg:px-10 px-4 py-5">

                                <div className=" flex  font-bold justify-around w-1/2 mx-auto ">
                                    <h5 className=" font-bold">Job Name</h5>
                                    <h5 className=" ">Email</h5>

                                </div>
                                <div className=" flex items-center justify-around font-bold  w-1/2 mx-auto  ">
                                    <h5 className="ml-20 ">Date </h5>
                                    <h5 className=""> Status </h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 sm:flex-none">
                            {bids?.map((bid) => (
                                <BidsTable key={bid._id} bid={bid}></BidsTable>
                               
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default MyBids;


// {
//     bids.map(bid => <BidsTable key={bid._id} bid={bid}></BidsTable>)
// }