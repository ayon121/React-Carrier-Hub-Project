
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {getStoredJobApplication} from "../../Utility/localStorage"
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = props => {
    const jobs = useLoaderData()
    const [appliedJobs , setAppliedJobs] = useState([])

    useEffect(()=> {
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
            // 1st way to filter jobs
            // const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            // 2nd way to filter jobs
            const JobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    JobsApplied.push(job)
                }
            }
            setAppliedJobs(JobsApplied)
        }
    },[])
    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-6 mb-4'>Jobs Applied {appliedJobs.length}</h1>
             <div>
                {
                    appliedJobs.map(appliedJob =><AppliedJob key={appliedJob.id} Job={appliedJob}></AppliedJob>)
                }
             </div>
        </div>
    );
};

AppliedJobs.propTypes = {
    
};

export default AppliedJobs;