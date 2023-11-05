import PropTypes from 'prop-types';

const Job = ({ job }) => {
    const { title, deadline, description, pricerange } = job || {};
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                            <p className="text-xl font-bold "> {pricerange}  </p>
                            <button className="badge badge-outline px-6 py-4 font-bold text-lg "> Bid Now  </button> </div>
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