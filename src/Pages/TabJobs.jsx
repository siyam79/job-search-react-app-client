
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Job from "./Job";
let cetegoryName = [

    { id: "Web Development", label: "Web Development" },
    { id: "Digital Marketing", label: "Digital Marketing" },
    { id: "Graphics Design", label: "Graphics Design" },

];


const TabJobs = ({ jobs }) => {

    let [activeTab, setActiveTab] = useState(cetegoryName[0].id);

    const jobsCurrentTab = jobs?.filter(job => job.category === activeTab);

    useEffect(() => {
        document.title = " Job Search | Tab Job ";
    }, []);
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="flex space-x-1 mb-2">
                {cetegoryName.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);

                        }}
                        className={`${activeTab === tab.id ? "" : "hover:text-[#91C96F]"}
                            relative rounded-full  px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="bubble"
                                className="absolute inset-0 z-10 bg-[#ea35b4] mix-blend-multiply"
                                style={{ borderRadius: 9999 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                {
                    jobsCurrentTab?.map(job => <Job key={job._id} job={job}></Job>)
                }
            </div>

        </div>
    );
};
TabJobs.propTypes = {
    jobs: PropTypes.object
}

export default TabJobs;