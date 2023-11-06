import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import BidsTable from "../Pages/BidsTable";


const MyBids = () => {
    const { user } = useAuth()
    console.log(user);

    const [bids, setBids] = useState([])

    const url = `http://localhost:5000/bidJobs?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [])
    console.log(bids);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bids.map(bid => <BidsTable key={bid._id} bid={bid}></BidsTable>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default MyBids;


// {
//     bids.map(bid => <BidsTable key={bid._id} bid={bid}></BidsTable>)
// }