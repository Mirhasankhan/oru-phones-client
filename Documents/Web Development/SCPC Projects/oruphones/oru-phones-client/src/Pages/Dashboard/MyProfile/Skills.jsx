import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Skills = () => {
    const { user } = useContext(AuthContext)
    const { data: allSkills = [], isLoading, refetch } = useQuery({
        queryKey: ['skill', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://oru-phones-server2-mirhasankhan.vercel.app/skills?email=${user?.email}`)
            return res.json()
        }
    })
   
    const [skill, setSkill] = useState('')
    const getData = (e) => {
        const text = e.target.value;
        setSkill(text)
    }
    const handleAddSkill = () => {
        const newSkill = { skill: skill, email: user?.email }
        fetch('https://oru-phones-server2-mirhasankhan.vercel.app/skills', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSkill)
        })
            .then(res => res.json()).then(data => {
                refetch()
                toast.success('Skill Added', {
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
        <div className='mx-6 w-full'>
            <dialog id="my_modal_6" className="modal">
                <form onSubmit={handleAddSkill} method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg mb-2">Add Your Skills</h3>
                    <input onChange={getData} className='input-style block' type="text" name="" id="" placeholder='Add Skill' />                    
                    <input className='upload mt-3 cursor-pointer' type="submit" value="Add" />
                </form>
            </dialog>
            <div className='border-2 rounded-md p-5 my-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold'>Skills</h1>
                    <button className="upload" onClick={() => window.my_modal_6.showModal()}>Add</button>
                </div>
                {
                    allSkills.map(s => <h1 key={s._id}>{s.skill}</h1>)
                }
            </div>
        </div>
    );
};

export default Skills;