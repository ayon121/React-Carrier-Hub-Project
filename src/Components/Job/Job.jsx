
import PropTypes from 'prop-types';
import { CiLocationOn , CiBadgeDollar} from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences } = job
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='mt-3 pt-5' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {job_title}
                </h2>
                <p className='text-2xl'>{company_name}</p>
                <div>
                    <button className='px-5 py-2 font-bold border rounded mr-3'>{remote_or_onsite}</button>
                    <button className='px-5 py-2 font-bold border rounded'>{job_type}</button>
                </div>
                <div className='flex mt-3'>
                    <h2 className='flex gap-2 mr-8'><CiLocationOn className='text-2xl'></CiLocationOn>{location}</h2>
                    <h2 className='flex gap-2'><CiBadgeDollar className='text-2xl'></CiBadgeDollar> {salary}</h2>

                </div>
                <div className="card-actions justify-start">
                    <Link to={`job/${id}`}><button className="btn px-4 py-3 border-black bg-base-200">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {

};

export default Job;