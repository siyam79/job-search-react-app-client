import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Req = () => {
    const [bidRequests, setBidRequests] = useState([]);
    const req = useLoaderData();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const filter = req.filter((item) => item.email === user?.email);
        setBidRequests(filter.map(bid => ({ ...bid, status: "Pending", buttonsVisible: true })));
    }, []);

    const handleApprove = (bidId) => {
        setBidRequests(prevState => prevState.map(bid => (
            bid._id === bidId ? { ...bid, status: "Approved", buttonsVisible: false } : bid
        )));
    };

    const handleReject = (bidId) => {
        setBidRequests(prevState => prevState.map(bid => (
            bid._id === bidId ? { ...bid, status: "Rejected", buttonsVisible: false } : bid
        )));
    };

    return (
        <div className="w-full py-10 mx-auto duration-300">
            <body className="flex items-center justify-center">
                <div className="container duration-300">
                    <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                        <div className="xl:block bg-[#19a4633a] duration-300">
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
                                    className={`flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300 ${bid.status === "Rejected" ? "bg-red-100" : "bg-green-100"
                                        }`}
                                >
                                    <h5 className="w-full mr-10">{bid.title}</h5>
                                    <h5 className="w-full mr-10">{bid.email}</h5>
                                    <h5 className="w-full mr-10">{bid.deadline}</h5>
                                    {bid.buttonsVisible && (
                                        <button className="btn" onClick={() => handleApprove(bid._id)}>
                                            Approve
                                        </button>
                                    )}
                                    {bid.buttonsVisible && (
                                        <button className="ml-5 btn" onClick={() => handleReject(bid._id)}>
                                            Reject
                                        </button>
                                    )}
                                    <p>Status: {bid.status}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Req;