import React from 'react';

const Connect = ({ user }) => {
    return (
        <div className='flex justify-between items-center border-2 rounded-md p-3'>
            <div>
                <h1 className='font-semibold'>{user.name}</h1>
                <h2 className='py-2'>Full Stack Developer</h2>
                <button className='connect-btn'>Connect</button>
            </div>
            <div>
                <img className='h-24 w-24 rounded-full' src={user.image} alt="" />
            </div>
        </div>
    );
};

export default Connect;