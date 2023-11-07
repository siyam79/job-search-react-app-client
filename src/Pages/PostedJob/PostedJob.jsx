import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostedJob = ({ mypostJob }) => {
    console.log(mypostJob);

    const { title, deadline, minimumPrice, maximumPrice, description } = mypostJob || {};

    return (
        <div>
            <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title truncate">
                        {title}

                    </h2>
                    <div className="badge badge-secondary"> Date : {deadline} </div>
                    <p> {description} </p>
                    <div>
                        <p className="text-xl font-bold "> Salary : <span>${minimumPrice} </span> - $<span>{maximumPrice}</span> </p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link>
                            <div className="badge badge-outline"> Update </div>
                        </Link>
                        <div className="badge badge-outline"> Delete </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
PostedJob.propTypes = {
    mypostJob: PropTypes.object
}


export default PostedJob;