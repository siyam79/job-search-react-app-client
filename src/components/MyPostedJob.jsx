import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJob = () => {


    const { user } = useAuth()
    console.log(user);

    const [myPostJobs, setmyPostJobs] = useState()

    const url = `http://localhost:5000/job?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setmyPostJobs(data))
    }, [url])
    console.log(myPostJobs);


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Job Are delete",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteJob/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Job has been deleted.',
                                'success'
                            )
                            const remaining = myPostJobs.filter(job => job._id !== id);
                            setmyPostJobs(remaining)
                        }
                    })
            }
        })

    }
    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
            {/* {
                myPostJobs?.map(mypostJob => <PostedJob key={mypostJob._id} mypostJob={mypostJob}
                
                ></PostedJob>)
            } */}


            {
                myPostJobs?.map(job => <div key={job._id} >

                    <div className="card w-96 h-[350px] bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title truncate">
                                {job.title}
                            </h2>
                            <div className="badge badge-secondary py-4 font-bold "> Date : {job.deadline} </div>
                            <p> {job.description} </p>
                            <div>
                                <p className="text-xl font-bold "> Salary : <span>${job.minimumPrice} </span> - $<span>{job.maximumPrice}</span> </p>
                            </div>
                            <div className="card-actions items-center justify-end">
                                <Link to={`/updateJob/${job._id}`}>
                                    <div className="badge badge-outline px-4 py-4 "> Update </div>
                                </Link>
                                <div onClick={()=> handleDelete(job._id)} className="badge badge-outline px-4 py-4 cursor-pointer "> Delete </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );

};

export default MyPostedJob;