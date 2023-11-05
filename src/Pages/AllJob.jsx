import { useLoaderData } from "react-router-dom";

const AllJob = () => {
    const allJobs = useLoaderData()
    console.log(allJobs);
    
    return (
        <div>
            
        </div>
    );
};

export default AllJob;