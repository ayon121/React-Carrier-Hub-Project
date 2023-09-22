
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import CatagoryList from '../CatagoryList/CatagoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;