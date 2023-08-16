import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import UseUser from '../../../Hooks/useUser';
import UseUpdate from '../../../Hooks/UseUpdate';
import { toast } from 'react-hot-toast';

const PersonalInfo = () => {
    const { user, updateUserProfile, updateUserEmail } = useContext(AuthContext)
    const [currentUser, isLoading, refetch] = UseUser()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [newName, setNewName] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const getData = (e) => {
        const number = e.target.value;
        setPhoneNumber(number)
    }
    const getEmail = (e) => {
        const email = e.target.value;
        setNewEmail(email)
    }
    const setName = (e) => {
        const name = e.target.value;
        setNewName(name)
    }

    const handleNumberEdit = () => {
        const userPhone = { phone: phoneNumber }
        UseUpdate(currentUser[0]._id, userPhone, refetch)
    }
    const handleNameEdit = () => {
        updateUserProfile(newName)
            .then(() => {
                toast.success("Name Updated")
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    const handleEmailChange = () => {
        updateUserEmail(newEmail)
            .then(() => {
                toast.success('Email Changed')
            })
            .catch(err => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
    }

    return (
        <div className='w-full border-2 p-5 mx-6 rounded-md mt-4'>
            {/* dialg starts */}
            <dialog id="my_modal_2" className="modal">
                <form onSubmit={handleNumberEdit} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Update Your Phone Number</h3>
                    <input onChange={getData} className='border-2 p-2 block my-4' type="number" placeholder='Type Phone Number' />                    
                    <input className='upload mt-3 cursor-pointer' type="submit" value="Update" />                    
                </form>
            </dialog>
            <dialog id="my_modal_3" className="modal">
                <form onSubmit={handleNameEdit} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Update Your Name</h3>
                    <input onChange={setName} className='input-style block my-4' type="text" placeholder='Type Name' />
                    <input className='upload mt-3 cursor-pointer' type="submit" value="Update" />                    
                </form>

            </dialog>
            <dialog id="my_modal_4" className="modal">
                <form onSubmit={handleEmailChange} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Update Your Email</h3>
                    <input required onChange={getEmail} className='input-style block w-full my-2' type="email" placeholder='Type Email' />
                    <input className='upload mt-3 cursor-pointer' type="submit" value="Update" />
                </form>
            </dialog>
            {/* dialog ends */}
            <div className='flex justify-between items-center'>
                <div>
                    <label htmlFor="">Your Name</label>
                    <h1 className='font-bold '>{user?.displayName || "Edit Your name"}</h1>
                </div>
                <button className="upload" onClick={() => window.my_modal_3.showModal()}>Edit</button>
            </div>
            <div className='flex justify-between items-center my-4'>
                <div>
                    <label htmlFor="">Email</label>
                    <h1 className='font-bold '>{user?.email || "Edit Your Email"}</h1>
                </div>
                <button className="upload" onClick={() => window.my_modal_4.showModal()}>Edit</button>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <label htmlFor="">Phone Number</label>
                    <h1 className='font-bold '>{currentUser[0]?.phone || "Edit Your Number"}</h1>
                </div>
                <button className="upload" onClick={() => window.my_modal_2.showModal()}>Edit</button>
            </div>
        </div>
    );
};

export default PersonalInfo;