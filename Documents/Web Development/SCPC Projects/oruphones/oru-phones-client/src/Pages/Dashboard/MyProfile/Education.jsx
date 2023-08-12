import React from 'react';

const Education = () => {
    return (
        <div className="mx-6">
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-semibold'>Education</h1>
                <button className='upload'>Edit</button>
            </div>
            <div className='border-2 rounded-lg p-3'>
                <h1 className='text-sky-600 font-semibold'>BRAC University</h1>
                <h1>2018-2023</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Et, consequatur.</p>
            </div>
        </div>
    );
};

export default Education;