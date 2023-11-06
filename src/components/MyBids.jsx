import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Bid from "../Pages/Bid";


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
        <div>
            <h1> your bids {bids.length} </h1>
            <div>
               {
                bids.map(bid  =><Bid key={bid._id} bid={bid}></Bid> )
               }
            </div>
        </div>
    );
};

export default MyBids;