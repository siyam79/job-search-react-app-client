import PropTypes from 'prop-types';

const BidsTable = ({ bid }) => {
    console.log(bid);
    const { deadline, title, buyerEmail } = bid || {}

    return (

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
            <h5 className="w-full mr-10">{title}</h5>
            <h5 className="w-full mr-10">{buyerEmail}</h5>
            <h5 className="w-full mr-10">{deadline}</h5>
            <div>
                {bid.status == true ? (
                    <div
                        aria-disabled
                        className="bg-[#19a463] hover:bg-green-600 font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded"
                    >
                        approved
                    </div>
                ) : bid.status == false ? (
                    <div
                        className="bg-[#eb4444e8]  hover:bg-red-600 font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded"
                    >
                        rejected
                    </div>
                ) : (
                    <button
                        className="bg-orange-400  hover:bg-orange-600  font-semibold text-center text-white px-7 md:px-12 py-2 md:py-3 mt-7 w-full rounded"
                    >
                        pending
                    </button>
                )}
            </div>
        </div>

    );
};
BidsTable.propTypes = {
    bid: PropTypes.object
}

export default BidsTable;