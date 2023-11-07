import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import BidsTable from "../Pages/BidsTable";
// import { Link } from "react-router-dom";


const MyBids = () => {
    const { user } = useAuth()
    console.log(user);

    const [bids, setBids] = useState([])

    const url = `http://localhost:5000/bidJobs?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])
    console.log(bids);
    return (
        <div className=" w-full py-10  mx-auto duration-300">
            <body className="flex items-center justify-center">
                <div className="container duration-300">
                    <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                        <div className=" xl:block bg-[#19a4633a] duration-300">
                            <div className="flex  items-center justify-between font-semibold border border-gray-100 lg:px-10 px-4 py-5">

                                <div className=" flex  justify-around w-1/2 mx-auto ">
                                    <h5 className=" ">Job Name</h5>
                                    <h5 className=" ">Email</h5>

                                </div>
                                <div className=" flex items-center justify-around  w-1/2 mx-auto  ">
                                    <h5 className="ml-20">Date </h5>
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