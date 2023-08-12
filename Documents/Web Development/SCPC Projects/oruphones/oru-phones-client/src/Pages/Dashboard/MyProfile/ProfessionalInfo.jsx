import React from 'react';
import demoImg from '../../../assets/imageUpload.jpg'
import { BsStarFill } from 'react-icons/Bs';

const ProfessionalInfo = () => {
    return (
        <div className='pt-12 flex justify-between mx-6 gap-12'>
            <div className='w-full flex justify-between items-center'>
                <img className='h-28 rounded-full w-28' src={demoImg} alt="" />
                <button className='upload'>Upload Photo</button>
            </div>
            <div className='w-full border-2 shadow-xl p-2 rounded-md flex gap-4 justify-between items-center'>
                <div>
                    <h1>Professional Details</h1>
                    <h1>Users personal details will appear here</h1>
                </div>
                <div className='relative'>
                    <BsStarFill className='text-sky-500 text-3xl' />
                    <BsStarFill className='absolute top-3 right-0 text-xl' />
                </div>
            </div>
        </div>
    );
};

export default ProfessionalInfo;