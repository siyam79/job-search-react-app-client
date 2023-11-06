import PropTypes from 'prop-types';

const Bid = ({bid}) => {
    console.log(bid);
    const {deadline} = bid || {}
    return (
        <div>
            <h1> Date : {deadline} </h1>
        </div>
    );
};
Bid.propTypes = {
    bid: PropTypes.object
}

export default Bid;