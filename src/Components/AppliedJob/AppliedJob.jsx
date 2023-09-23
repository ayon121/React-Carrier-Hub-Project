
import PropTypes from 'prop-types';

const AppliedJob = ({Job}) => {
    console.log(Job)
    const {logo ,job_title , company_name , educational_requirements, job_type, salary ,job_description} = Job
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-5 w-4/5 mx-auto m-4">
        
            <figure><img className='h-8  mx-9 my-11'  src={logo} alt="Company"/></figure>
            <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <p>Salary : {salary}</p>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    
};

export default AppliedJob;