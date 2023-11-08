import PropTypes from 'prop-types';

const BidsTable = ({ bid }) => {
    console.log(bid);
    const { deadline, title, buyerEmail} = bid || {}
    return (

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
            <h5 className="w-full mr-10">{title}</h5>
            <h5 className="w-full mr-10">{buyerEmail}</h5>
            <h5 className="w-full mr-10">{deadline}</h5>
            <button> Pending </button>
        </div>

    );
};
BidsTable.propTypes = {
    bid: PropTypes.object
}

export default BidsTable;