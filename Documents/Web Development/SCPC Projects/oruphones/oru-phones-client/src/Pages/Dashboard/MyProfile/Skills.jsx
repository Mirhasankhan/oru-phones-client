import React from 'react';

const Skills = () => {
    return (
        <div className='mx-6 w-full'>
            <div className='border-2 rounded-md p-3 my-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold'>Skills</h1>
                    <button className='upload'>Edit</button>
                </div>
                <h1 className='text-justify pt-2'>Next JS <br /> React JS <br /> Javascript</h1>
            </div>
        </div>
    );
};

export default Skills;