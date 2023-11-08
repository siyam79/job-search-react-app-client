

const ReqData = ({ reqJob }) => {
    const { title, email, deadline } = reqJob || {}
    return (
        <div>
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
                <h5 className="w-full mr-10">{title}</h5>
                <h5 className="w-full mr-10">{email}</h5>
                <h5 className="w-full mr-10">{deadline}</h5>
                <div>
                    
                </div>
            </div>

            {/* <div
                
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

            </div> */}
        </div>
    );
};

export default ReqData;