import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Education = () => {
    const { user } = useContext(AuthContext)
    const [institution, setinstitution] = useState('')
    const [subject, setSubject] = useState('')

    const { data: allEducation = [], isLoading, refetch } = useQuery({
        queryKey: ['education', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/education?email=${user?.email}`)
            return res.json()
        }
    })
    console.log(allEducation);
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
        fetch('http://localhost:5000/education', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEducation)
        })
            .then(res => res.json()).then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="mx-6">
            <dialog id="my_modal_8" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Add Your Certificate</h3>
                    <input onChange={getInstitution} className='input-style block' type="text" name="" id="" placeholder='Institution Name' />
                    <input onChange={getSubject} className='input-style block mt-3' type="text" name="" id="" placeholder='Exam Name' />
                    <h1 onClick={handleAddEducation} className='btn mt-3'>Add</h1>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
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
                </div> : <p className='text-center text-sky-500 font-semibold'>Update Your Education Details By Clicking Edit</p>
           }
        </div>
    );
};

export default Education;