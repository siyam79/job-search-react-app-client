import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";


const MyPostedJob = () => {


    const { user } = useAuth()
    console.log(user);

    const [myPostJob, setMyPostJob] = useState([])

    const url = `http://localhost:5000/job?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyPostJob(data))
    }, [url])
    console.log(myPostJob);

    return (
        <div>
        <h1> my post job {myPostJob.length} </h1>
        </div>
    );
};

export default MyPostedJob;