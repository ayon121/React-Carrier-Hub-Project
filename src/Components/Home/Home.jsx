
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { Helmet } from 'react-helmet-async';

const Home = props => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;