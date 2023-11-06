import PropTypes from 'prop-types';

const BidsTable = ({ bid }) => {
    console.log(bid);
    const { deadline, title, email } = bid || {}
    return (
        <tr>
            <th>
                {/* <label>
                    <input type="checkbox" className="checkbox" />
                </label> */}
            </th>
            <td>
                {title}
            </td>
            <td>

            </td>
            <td>{email}</td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};
BidsTable.propTypes = {
    bid: PropTypes.object
}

export default BidsTable;