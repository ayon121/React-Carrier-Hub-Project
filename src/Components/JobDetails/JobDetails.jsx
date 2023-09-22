
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveJobApplication} from "../../Utility/localStorage"
const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const currentjob = jobs.find(job => job.id === idInt)
    const {job_title, job_responsibility ,salary, educational_requirements , company_name , job_description, location , job_type , experiences} = currentjob

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You Have Applied Successfully')
    }
    return (
        <div>
            <h1 className='text-5xl text-center mt-6 mb-3 font-bold'>Job Details</h1>
            <p className='text-3xl mt-3 font-semibold '>{job_title}</p>
            <p className='text-xl mt-3 font-semibold'>{company_name}</p>

            <p className='mt-6'><b>Educational Requirements: </b>{educational_requirements}</p>
            <p className='mt-2'><b>Location:</b> {location}</p>
            <p className='mt-2'><b>Job Type:</b> {job_type}</p>


            <p className='mt-3'>{job_description}</p>
            <p className='mt-3'><b>Experiences: </b>{experiences}</p>
            <p className='mt-3'><b>Job Responsibility: </b>{job_responsibility}</p>
            <h2 className='text-xl font-bold mt-4'>Salary: {salary}</h2>
            <button onClick={handleApplyJob} className='btn mt-5'>Apply Now</button>
            <ToastContainer></ToastContainer>


            


        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;