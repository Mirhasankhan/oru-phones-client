import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const PersonalInfo = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='flex gap-12 mx-6'>
            <div className='w-full border-2 p-5 rounded-md mt-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <label htmlFor="">Your Name</label>
                        <h1 className='font-bold '>{user?.displayName || "Edit Your name"}</h1>
                    </div>
                    <button className='upload'>Edit</button>
                </div>
                <div className='flex justify-between items-center my-4'>
                    <div>
                        <label htmlFor="">Email</label>
                        <h1 className='font-bold '>{user?.email || "Edit Your Email"}</h1>
                    </div>
                    <button className='upload'>Edit</button>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <label htmlFor="">Phone Number</label>
                        <h1 className='font-bold '>{user?.phone || "Edit Your Number"}</h1>
                    </div>
                    <button className='upload'>Edit</button>
                </div>
            </div>
            <div className='w-full'>

            </div>
        </div>
    );
};

export default PersonalInfo;