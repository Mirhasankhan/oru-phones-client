import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Skills = () => {
    const { user } = useContext(AuthContext)
    const { data: allSkills = [], isLoading, refetch } = useQuery({
        queryKey: ['skill', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/skills?email=${user?.email}`)
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
        fetch('http://localhost:5000/skills', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSkill)
        })
            .then(res => res.json()).then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='mx-6 w-full'>
            <dialog id="my_modal_6" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Add Your Skills</h3>
                    <input onChange={getData} className='input-style block' type="text" name="" id="" placeholder='Add Skill' />
                    <h1 onClick={handleAddSkill} className='btn mt-3'>Add</h1>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className='border-2 rounded-md p-3 my-4'>
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