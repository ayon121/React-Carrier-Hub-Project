
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage =()=> {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Error Page</title>
            </Helmet>
            <h1>Oppss</h1>
            <Link to="/">Go Back To Home</Link>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;