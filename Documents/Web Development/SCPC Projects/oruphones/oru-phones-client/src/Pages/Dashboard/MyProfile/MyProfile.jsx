import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import PersonalInfo from './PersonalInfo';
import ProfileImage from './ProfileImage';
import Certificate from './Certificate';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Skills from './Skills';


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='bg-[#FAFBFF] h-full'>
            <div className='w-[1050px]'>
                <div className='bg-[#1E2875] rounded-md h-48'>
                    <h1 className='text-white p-4'>MY PROFILE</h1>
                </div>
                <div className='flex gap-12 mx-6 py-8 bg-white'>
                    <div className='w-full'>
                        <ProfileImage/>
                        <PersonalInfo />
                        <About/>
                        <Skills/>
                    </div>
                    <div className='w-full'>
                      <Certificate/>
                      <Experience/>
                      <Education/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;