
import PropTypes from 'prop-types';

const Banner = props => {
    return (
        <div className='w-full h-80 bg-base-200 mt-3 rounded-2xl flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-2'>Carrer Hub Jobs</h1>
                <p className='tracking-widest'>Get the Job Of Your Choice</p>
            </div>
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;