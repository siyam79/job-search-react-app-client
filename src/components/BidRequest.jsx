// import { useEffect, useState } from "react";
// import useAuth from "../Hooks/useAuth";

import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";

const BidRequest = () => {

    const reqData = useLoaderData()
    console.log(reqData);
    const [reqBidData, setReqBidData] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const filterData = reqData.filter(reqItem => reqItem.email == user.email)
        setReqBidData(filterData)
    }, [reqData, user.email])
    console.log(reqBidData);

    

    return (
        <div>
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
                                {
                                    reqBidData?.map(req => <div key={req._id} className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
                                        <h5 className="w-full mr-10">{req.title}</h5>
                                        <h5 className="w-full mr-10">{req.email}</h5>
                                        <h5 className="w-full mr-10">{req.deadline}</h5>
                                       <div className=" flex items-center gap-2 ">
                                       <button className=" bg-green-600 text-white px-4 py-1 rounded-md font-semibold  "> Accept</button>
                                       <button className=" bg-red-500 text-white px-4 py-1 rounded-md font-semibold  ">Reject </button>
                                       </div>
                                    </div>
                                    )
                                }
                               
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    );
};

export default BidRequest;