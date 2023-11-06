import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { _id, title, deadline, description, minimumPrice, maximumPrice, } = job || {};
    // console.log({minimumPrice});
    return (
        <div>
            <div className="card w-96 bg-base-100 h-[300px] shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title truncate ">
                        {title}
                    </h2>
                    <div>
                        <h1 className='text-lg font-bold '>Date : <span className="badge badge-secondary text-white ">{deadline}</span> </h1>
                    </div>
                    <p>{description}</p>
                    <div className=" justify-end">
                        <div className=" flex ">
                            <p className="text-xl font-bold "> Price <span>${minimumPrice} </span> - $<span>{maximumPrice}</span> </p>
                            <Link to={`/job/${_id}`}>
                                <button className="badge badge-outline px-6 py-4 font-bold text-lg "> Bid Now  </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
Job.propTypes = {
    job: PropTypes.object
}
export default Job;