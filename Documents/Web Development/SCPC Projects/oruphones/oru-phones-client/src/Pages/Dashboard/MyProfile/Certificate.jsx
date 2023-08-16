import React, { useContext, useState } from 'react';
import { BsStarFill } from 'react-icons/Bs';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Certificate = () => {
    const { user } = useContext(AuthContext)
    const { data: allCertificate = [], isLoading, refetch } = useQuery({
        queryKey: ['certificate', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://oru-phones-server2-mirhasankhan.vercel.app/certificate?email=${user?.email}`)
            return res.json()
        }
    })
    const [certificate, setCertificate] = useState('')
    const [course, setCourse] = useState('')

    const getCertificate = (e) => {
        const text = e.target.value;
        setCertificate(text)
    }
    const getCourse = (e) => {
        const course = e.target.value;
        setCourse(course)

    }
    const handleAddCertificate = () => {
        const newCertificate = { certificate: certificate, course: course, email: user?.email }
        fetch('https://oru-phones-server2-mirhasankhan.vercel.app/certificate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCertificate)
        })
            .then(res => res.json()).then(data => {
                refetch()
                toast.success('Certificate Added', {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="mx-6">
            <dialog id="my_modal_7" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Add Your Certificate</h3>
                    <input onChange={getCertificate} className='input-style block' type="text" name="" id="" placeholder='Certicate Name' />
                    <input onChange={getCourse} className='input-style block mt-3' type="text" name="" id="" placeholder='Course Name' />
                    <button onClick={handleAddCertificate} className='btn mt-3'>Add</button>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className='w-full border-2 p-3 rounded-md flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='font-semibold'>Professional Details</h1>
                    <h1>Full Stack Developer</h1>
                </div>
                <div className='relative'>
                    <BsStarFill className='text-sky-500 text-4xl' />
                    <BsStarFill className='absolute top-3 right-0 text-2xl' />
                </div>
            </div>
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-semibold'>Certificate</h1>
                <button className="upload" onClick={() => window.my_modal_7.showModal()}>Add</button>
            </div>
           {
            allCertificate.length> 0 ?  <div>
            {
                allCertificate.map(c => <div
                    key={c._id}
                    className='text-center mb-2 p-3 rounded-full border-2'
                >
                    <h1 className='font-semibold text-sky-500'>{c.certificate}</h1>
                    <p>{c.course}</p>
                </div>)
            }
        </div> : <p className='text-center text-sky-500 font-semibold'>Add your certificates by clicking edit</p>
           }
        </div>
    );
};

export default Certificate;