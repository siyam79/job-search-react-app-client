// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'

// const PostedJob = ({ mypostJob }) => {

//     console.log(mypostJob);

//     const [deleteJob, setDeleteJob] = useState(mypostJob)
    
//     const { title, deadline, minimumPrice, maximumPrice, description, _id } = deleteJob || {};

//     const handleDelete = id => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "Your Job Are delete",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/deleteJob/${_id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your Job has been deleted.',
//                                 'success'
//                             )
//                             const remaining = deleteJob.filter(job => job._id !== id);
//                             setDeleteJob(remaining)
//                         }
//                     })
//             }
//         })

//     }

   

//     return (
//         <div>
//             <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
//                 <div className="card-body">
//                     <h2 className="card-title truncate">
//                         {title}
//                     </h2>
//                     <div className="badge badge-secondary"> Date : {deadline} </div>
//                     <p> {description} </p>
//                     <div>
//                         <p className="text-xl font-bold "> Salary : <span>${minimumPrice} </span> - $<span>{maximumPrice}</span> </p>
//                     </div>
//                     <div className="card-actions justify-end">
//                         <Link to={`/updateJob/${_id}`}>
//                             <div className="badge badge-outline"> Update </div>
//                         </Link>
//                         <div onClick={() => handleDelete(_id)} className="badge badge-outline"> Delete </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// PostedJob.propTypes = {
//     mypostJob: PropTypes.object
// }
// export default PostedJob;