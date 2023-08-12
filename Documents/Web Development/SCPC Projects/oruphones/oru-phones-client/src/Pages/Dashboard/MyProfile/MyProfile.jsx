import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import ProfessionalInfo from './ProfessionalInfo';
import PersonalInfo from './PersonalInfo';


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className='bg-[#FAFBFF] h-full'>
            <div className='w-[1050px]'>
                <div className='bg-[#1E2875] rounded-md h-48'>
                    <h1 className='text-white p-4'>MY PROFILE</h1>
                </div>
                <div className='mx-6 bg-white'>
                    <ProfessionalInfo />
                    <PersonalInfo/>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;