import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { BiBarChartAlt } from "react-icons/bi";


const Job = ({ job }) => {

    const { user } = useAuth()
    const userEmail = user?.email
    console.log(userEmail);

    const { _id , title, deadline, description, minimumPrice, maximumPrice, email } = job || {};
    // console.log({minimumPrice});
    return (
        <div>
            <div className="card w-96 bg-base-100 h-[350px] shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title truncate ">
                        {title}
                    </h2>
                    <div className=' flex justify-between items-center '>
                        <h1 className='text-lg font-bold '>Date : <span className="badge badge-secondary text-white ">{deadline}</span> </h1>
                       <BiBarChartAlt className=' text-4xl '></BiBarChartAlt>
                    </div>
                    <p>{description}</p>
                    <div className=" justify-end">
                        <div className=" flex ">
                            <p className="text-xl font-bold "> salary : <span>${minimumPrice} </span> - $<span>{maximumPrice}</span> </p>
                            {/* {
                                userEmail !== email && <Link to={`/job/${_id}`}>
                                <button className="badge badge-outline px-6 py-4 font-bold text-lg "> Bid Now  </button>
                            </Link> : 
                            } */}

                            {userEmail !== email ? (
                                <Link to={`/job/${_id}`}>
                                    <button className="badge badge-outline px-6 py-4 font-bold text-lg">Bid Now</button>
                                </Link>
                            ) : (
                                <button className="badge badge-outline px-6 py-4 font-bold text-lg" disabled>
                                    Bid Now
                                </button>
                            )}
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