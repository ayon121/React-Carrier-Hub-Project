import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import JobCategories from '../JobCategories/JobCategories';

const CatagoryList = props => {
    const [jobcategories , setjobCategories] = useState([])

    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setjobCategories(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center mt-5 mb-3'>Job Category List</h1>
            <p className='text-center mb-3'>Explore thousands of jobs opportunities with all information you need. Its your Future</p>
            <div className='grid grid-cols-1 m-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-84'>
                {
                    jobcategories.map(category => <JobCategories key={category.id} categories={category}></JobCategories>)
                }
            </div>

            
            
        </div>
    );
};

CatagoryList.propTypes = {
    
};

export default CatagoryList;