import React from 'react';
import NotConnected from './NotConnected';

const MyConncetions = () => {
    return (
        <div className='bg-[#FAFBFF] h-full'>
            <div className='bg-[#1E2875] rounded-md h-32'>
                <h1 className='text-white p-4'>MY Connections</h1>               
            </div>
            <NotConnected />
        </div>
    );
};

export default MyConncetions;