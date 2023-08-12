import React from 'react';

const Experience = () => {
    return (
        <div className='mx-6 mt-4'>
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-semibold'>Experience</h1>
                <button className='upload'>Edit</button>
            </div>
            <div className='border-2 rounded-lg p-3'>
                <h1 className='font-semibold'>7 Years       Full Time</h1>
                <h2>OruPhones     ---Full Stack Developer</h2>
            </div>
            <div className='border-2 rounded-lg p-3 mt-4'>
                <h1 className='font-semibold'>8 Years       Full Time</h1>
                <h2>Phero     ---Instructor</h2>
            </div>
        </div>
    );
};

export default Experience;