import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import UseUser from '../../../Hooks/useUser';
import { toast } from 'react-hot-toast';
import UseUpdate from '../../../Hooks/UseUpdate';

const About = () => {
    const { user, loading } = useContext(AuthContext)
    const [currentUser, isLoading, refetch] = UseUser()
    const [about, setAbout] = useState('')

    const getData = (e) => {
        const text = e.target.value;
        setAbout(text)
    }

    const handleUpdateAbout = () => {
        const userAbout = { about: about }
        UseUpdate(currentUser[0]._id, userAbout)

    }
    return (
        <div className='mx-6 w-full'>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">About Yourself</h3>
                    <textarea onChange={getData} placeholder='Write here' className='border-2 w-full mt-2 p-3 rounded-md' name="" id="" cols="30" rows="5"></textarea>
                    <h1 className='btn' onClick={handleUpdateAbout}>Update</h1>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className='border-2 rounded-md p-3 my-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold'>About <span className='text-sky-600'>{user?.displayName}</span></h1>
                    <button className="upload" onClick={() => window.my_modal_1.showModal()}>Edit</button>
                </div>
                <h1 className='text-justify pt-2'>{currentUser[0]?.about}</h1>
            </div>
        </div>
    );
};

export default About;