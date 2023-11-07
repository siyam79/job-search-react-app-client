import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import PostedJob from "../Pages/PostedJob/PostedJob";



const MyPostedJob = () => {


    const { user } = useAuth()
    console.log(user);

    const [myPostJobs, setmyPostJobs] = useState([])

    const url = `http://localhost:5000/job?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setmyPostJobs(data))
    }, [url])
    console.log(myPostJobs);

    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
            {
                myPostJobs?.map(mypostJob => <PostedJob key={mypostJob._id} mypostJob={mypostJob}></PostedJob>)
            }
        </div>
    );
};

export default MyPostedJob;