
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {getStoredJobApplication} from "../../Utility/localStorage"
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = props => {
    const jobs = useLoaderData()
    const [appliedJobs , setAppliedJobs] = useState([])
    const [displayjobs , setDisplayJobs] = useState([])

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(remoteJobs)
        }
    }

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
            setDisplayJobs(JobsApplied)
        }
    },[jobs])
    return (
        <div className='mb-11'>
            <h1 className='text-5xl text-center font-bold mt-6 mb-4'>Jobs Applied {appliedJobs.length}</h1>
             <div>
                {
                    displayjobs.map(appliedJob =><AppliedJob key={appliedJob.id} Job={appliedJob}></AppliedJob>)
                }
             </div>
             {/* <div className='flex gap-4 justify-center mt-8'>
                <button className='btn btn-primary' onClick={() => handleJobsFilter('all')}>All</button>
                <button className='btn btn-primary'  onClick={() => handleJobsFilter('remote')}>Remote</button>
                <button className='btn btn-primary'  onClick={()=> handleJobsFilter('onsite')}>Onsite</button>
             </div> */}
             <div className={appliedJobs == 0 || 'hidden'}>
                <h1 className='text-6xl text-center mt-6 mb-14'>You Did Not Applied In Any Jobs</h1>
                <h1 className='text-4xl text-center mt-6 mb-14'>Go And Find A Jobs For You</h1>
                <div className='flex justify-center'>
                    <button className='btn px-4 py-3 border-black bg-base-200 mt-3 mb-4 '>Apply Now</button>
                </div>
             </div>
             <div className={displayjobs == 0 || 'hidden'}>
                <h1 className='text-6xl text-center mt-6 mb-14'>There Are No Jobs Found</h1>
                <div className='flex justify-center'>
                    <button className='btn px-4 py-3 border-black bg-base-200 mt-3 mb-4 '>Apply Now</button>
                </div>
             </div>
             <div className={displayjobs == 0 && 'hidden'}>
                <div className='flex gap-4 justify-center mt-8'>
                    <button className='btn px-4 py-3 border-black bg-base-200' onClick={() => handleJobsFilter('all')}>All</button>
                    <button className='btn px-4 py-3 border-black bg-base-200'  onClick={() => handleJobsFilter('remote')}>Remote</button>
                    <button className='btn px-4 py-3 border-black bg-base-200'  onClick={()=> handleJobsFilter('onsite')}>Onsite</button>
                </div>
             </div>
        </div>
    );
};

AppliedJobs.propTypes = {
    
};

export default AppliedJobs;