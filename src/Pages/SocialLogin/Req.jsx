import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { toast } from "react-toastify";
import ReqData from "../ReqData";

const Req = () => {
    const [bidRequests, setBidRequests] = useState([]);
    const req = useLoaderData();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const filter = req.filter((item) => item.email === user?.email);
        setBidRequests(filter.map(bid => ({ ...bid, status: "Pending", buttonsVisible: true })));
    }, [req, user.email]);

    // const handleUpdateBid = e => {
    //     e.preventDefault();
       
    //     const updateBid = {
    //         status: "completed"
    //     }
    // }

    // fetch(`http://localhost:5000/updateStatus/${_id}`, {
    //     method: "PUT",
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify(updateBid),
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if (data.modifiedCount > 0) {
    //             toast.success(" Job Update Success Full ", {
    //                 position: "top-left"
    //             })
    //         }
    //     })




    // const handleApprove = (bidId) => {
    //     setBidRequests(prevState => prevState.map(bid => (
    //         bid._id === bidId ? { ...bid, status: "Approved", buttonsVisible: false } : bid
    //     )));
    // };

    // const handleReject = (bidId) => {
    //     setBidRequests(prevState => prevState.map(bid => (
    //         bid._id === bidId ? { ...bid, status: "Rejected", buttonsVisible: false } : bid
    //     )));
    // };

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
                            {bidRequests?.map(reqJob => <ReqData key={reqJob._id} reqJob={reqJob}></ReqData>) 
                               
                            }
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Req;