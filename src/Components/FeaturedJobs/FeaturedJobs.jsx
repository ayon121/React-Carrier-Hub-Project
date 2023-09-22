
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = ()=> {
    const [jobs , setjobs] = useState([])

    // this is not the best option to load show all 
    const [datalenght , setDataLength] = useState(4)

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    }, [])


    return (
        <div>
            <div>
                <h1 className='text-4xl text-center mt-5 mb-3'>Featured Jobs {jobs.length}</h1>
                <p className='text-center mb-3'>Explore thousands of jobs opportunities with all information you need. Its your Future</p>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-8'>
                {
                    jobs.slice(0 , datalenght).map(job => <Job key={job.id} job={job}></Job>)
                }

            
            </div>
            <div className={datalenght === jobs.length && 'hidden'}>
                <div className="flex justify-center">
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary mt-6">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

FeaturedJobs.propTypes = {
    
};

export default FeaturedJobs;