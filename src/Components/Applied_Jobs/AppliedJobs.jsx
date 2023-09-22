
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {getStoredJobApplication} from '../../Utility/localStorage'

const AppliedJobs = props => {
    const jobs = useLoaderData()
    useEffect(()=> {
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
            const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
        }
    },[])
    return (
        <div>
            <h1>Jobs I HAve Applied</h1>
        </div>
    );
};

AppliedJobs.propTypes = {
    
};

export default AppliedJobs;