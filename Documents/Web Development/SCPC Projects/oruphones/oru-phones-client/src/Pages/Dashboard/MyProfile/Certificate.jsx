import React from 'react';
import { BsStarFill } from 'react-icons/Bs';

const Certificate = () => {
    return (
        <div className="mx-6">
            <div className='w-full border-2 p-3 rounded-md flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='font-semibold'>Professional Details</h1>
                    <h1>Users personal details <br /> will appear here</h1>
                </div>
                <div className='relative'>
                    <BsStarFill className='text-sky-500 text-4xl' />
                    <BsStarFill className='absolute top-3 right-0 text-2xl' />
                </div>
            </div>
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-semibold'>Certificate</h1>
                <button className='upload'>Edit</button>
            </div>
            <div className='p-3 rounded-full border-2'>
                <h1 className='text-center'>Add your <br />Certificates</h1>
            </div>
        </div>
    );
};

export default Certificate;