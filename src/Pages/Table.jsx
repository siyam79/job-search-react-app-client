import { Link } from "react-router-dom";


const Table = () => {
    return (
        <div>
            <div className=" w-full py-10  mx-auto duration-300">
                <body className="flex items-center justify-center">
                    <div className="container duration-300">
                        <div className="w-full mx-auto bg-white rounded-2xl overflow-hidden sm:shadow-lg my-5 duration-300">
                            <div className=" xl:block bg-[#19a4633a] duration-300">
                                <div className="flex  items-center justify-between font-semibold border border-gray-100 lg:px-10 px-4 py-5">
                                    
                                    
                                    <h5 className="w-full mr-10">Job Name</h5>
                                    <h5 className="w-full mr-10">Email</h5>
                                    <h5 className="w-full mr-10">Date </h5>
                                    <h5 className="w-full mr-10"> Status </h5>
                                    
        
                                   
                                </div>
                            </div>
                            <div className="flex-1 sm:flex-none">
                                {((job) => (
                                    <div key={job._id} className="flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-between border border-gray-100 hover:bg-[#19a4630c] px-10 py-5 duration-300">
                                        <img className="h-10 mr-2" src={job.company_logo} alt="" />
                                        <h5 className="w-full mr-10">{job.company_name}</h5>
                                        <h5 className="w-full mr-10">{job.posted_by}</h5>
                                        <h5 className="w-full mr-10 text-lg font-semibold line-clamp-2" data-tooltip-id="all-job-page-job-title" data-tooltip-content={job.job_title}>{job.job_title}</h5>
                                        <h5 className="w-full mr-10">{job.job_category}</h5>
                                        <h5 className="w-full mr-10">{job.job_posting_date}</h5>
                                        <h5 className="w-full mr-10">{job.application_deadline}</h5>
                                        <h5 className="w-full mr-10">{job.salary_range}</h5>
                                        <Link to={`/details/${job._id}`}>
                                            <h5 className="font-bold text-[#19a4639f] hover:text-[#19a463e8]  duration-300">Details</h5>
                                        </Link>
                                       
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    );
};

export default Table;