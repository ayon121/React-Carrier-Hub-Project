
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ErrorPage =()=> {
    return (
        <div>
            <h1>Oppss</h1>
            <Link to="/">Go Back To Home</Link>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;