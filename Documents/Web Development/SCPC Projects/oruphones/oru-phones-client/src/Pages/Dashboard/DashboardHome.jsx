import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import step1 from '../../assets/create.png'
import step2 from '../../assets/connect.jpg'

const DashboardHome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" bg-[#FAFBFF] h-full p-6">
            <div>
                <img className='w-60 h-24' src="/logo.png" alt="" />
                <div className='flex flex-col justify-center items-center mt-12'>
                    <h1 className='font-bold text-5xl'>Find your next top tech job in 1 week.</h1>
                    <p className='text-xl font-bold py-8'><span className='bg-yellow-300'>Are you a top </span>Software Engineer, Product Manager or Data Scientist? <br />
                        Let leading Indian technology <span className='bg-yellow-300'>companies compete to hire you</span>.</p>
                    <Link to={user?.email ? 'myProfile' : '/login'}><button className='btn btn-secondary'>{user?.email ? 'Update Your Profile' : 'Login To Continue'}</button></Link>
                </div>
            </div>
            <div className='flex justify-evenly mt-12 items-center'>
                <div>
                    <img className='h-24 w-24 rounded-full' src={step1} alt="" />
                    <h1 className='font-bold mt-4'>Step1: Complete Profile</h1>
                </div>
                <div>
                    <img className='h-24 w-24 rounded-full' src={step2} alt="" />
                    <h1 className='font-bold mt-4'>Step2: Connect With People</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;