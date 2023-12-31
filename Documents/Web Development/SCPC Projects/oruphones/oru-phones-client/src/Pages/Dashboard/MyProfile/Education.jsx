import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Education = () => {
    const { user } = useContext(AuthContext)
    const [institution, setinstitution] = useState('')
    const [subject, setSubject] = useState('')

    const { data: allEducation = [], isLoading, refetch } = useQuery({
        queryKey: ['education', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://oru-phones-server2-mirhasankhan.vercel.app/education?email=${user?.email}`)
            return res.json()
        }
    })
   
    const getInstitution = (e) => {
        const text = e.target.value;
        setinstitution(text)
    }
    const getSubject = (e) => {
        const course = e.target.value;
        setSubject(course)

    }
    const handleAddEducation = () => {
        const newEducation = { institution: institution, subject: subject, email: user?.email }
        fetch('https://oru-phones-server2-mirhasankhan.vercel.app/education', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEducation)
        })
            .then(res => res.json()).then(data => {
                refetch()
                toast.success('Education Detail Updated', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
    }
    return (
        <div className="mx-6">
            <dialog id="my_modal_8" className="modal">
                <form onSubmit={handleAddEducation} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg pb-3">Add Your Certificate</h3>
                    <input required onChange={getInstitution} className='input-style block' type="text" name="" id="" placeholder='Institution Name' />
                    <input required onChange={getSubject} className='input-style block mt-3' type="text" name="" id="" placeholder='Exam Name' />                    
                    <input className='upload mt-3 cursor-pointer' type="submit" value="Add" />
                </form>
            </dialog>
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-semibold'>Education</h1>
                <button className="upload" onClick={() => window.my_modal_8.showModal()}>Add</button>
            </div>
            {
                allEducation.length > 0 ? <div>
                    {
                        allEducation.map(e => <div className='border-2 rounded-lg p-3 mb-2' key={e._id}>
                            <h1 className='text-sky-500 font-semibold'>{e.institution}</h1>
                            <h1>2018-2023</h1>
                            <p>{e.subject}</p>
                        </div>)
                    }
                </div> : <p className='text-center text-sky-500 font-semibold'>Update Your Education Details By Clicking Add</p>
           }
        </div>
    );
};

export default Education;