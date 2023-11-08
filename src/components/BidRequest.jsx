import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const BidRequests = () => {


    const req = useLoaderData();
    const [bidRequests, setBidRequests] = useState([]);
   
    const { user } = useAuth()

    useEffect(() => {
        const filter = req.filter((item) => item.email === user?.email);
        setBidRequests(filter.map(bid => ({ ...bid, status: "Pending", buttonsVisible: true })));
    }, [req, user.email]);

    const handleApprove = (bidReqId) => {
        fetch(`http://localhost:5000/updateStatus/${bidReqId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: true }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        setBidRequests((prevState) =>
            prevState.map((bid) =>
                bid._id === bidReqId
                    ? { ...bid, status: "Approved", buttonsVisible: false }
                    : bid
            )
        );
    };
    const handleReject = (bidReqId) => {
        fetch(`http://localhost:5000/status/${bidReqId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: false }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        setBidRequests((prevState) =>
            prevState.map((bid) =>
                bid._id === bidReqId
                    ? { ...bid, status: "Rejected", buttonsVisible: false }
                    : bid
            )
        );
    };

    return (
        <div className="w-full py-10 mx-auto duration-300">
            <body className="flex items-center justify-center">
                <div className="container duration-300">
                    <div className="w-full mx-auto rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                        <div className="xl:block  duration-300">
                            <div className="flex items-center justify-between font-semibold border border-gray-100 lg:px-10 px-4 py-5">
                                <div className="flex justify-around w-1/2 mx-auto">
                                    <h5 className="">Job Name</h5>
                                    <h5 className="">Email</h5>
                                </div>
                                <div className="flex items-center justify-around w-1/2 mx-auto">
                                    <h5 className="ml-20">Date</h5>
                                    <h5 className="">Status</h5>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 sm:flex-none">
                            {bidRequests?.map((bid) => (
                                <div
                                    key={bid._id}
                                    className={`flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5  duration-300 ${bid.status === "Rejected" ? "" : ""
                                        }`}
                                >
                                    <h5 className="w-full mr-10">{bid.title}</h5>
                                    <h5 className="w-full mr-10">{bid.email}</h5>
                                    <h5 className="w-full mr-10">{bid.deadline}</h5>

                                    {bid.buttonsVisible && (
                                        <button className="bg-green-600 px-2 py-2 text-white rounded-lg font-bold mr-2 " onClick={() => handleApprove(bid._id)}>
                                            Accept
                                        </button>
                                    )}
                                    {bid.buttonsVisible && (
                                        <button className="bg-red-600 px-2 py-2 text-white rounded-lg font-bold " onClick={() => handleReject(bid._id)}>
                                            Reject
                                        </button>
                                    )}
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default BidRequests;