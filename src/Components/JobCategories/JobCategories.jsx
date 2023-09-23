import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const JobCategories = ({categories})=> {
    console.log(categories)
    const {logo , category_name , availability} = categories


    return (
        <div className='border-4 border-base-200 rounded-3xl mt-6'>
            <div className='text-center p-5'>
                <h1 className='text-4xl font-extrabold'>{logo}</h1>
                <h1 className='text-2xl mt-2'>{category_name}</h1>
                <p className='mt-2'>{availability}</p>
            </div>
        </div>
    );
};

JobCategories.propTypes = {
    
};

export default JobCategories;