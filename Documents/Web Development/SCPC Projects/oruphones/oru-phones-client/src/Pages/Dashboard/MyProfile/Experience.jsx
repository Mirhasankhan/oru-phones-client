import React, { useContext } from 'react';
import AddExperience from './AddExperience';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Experience = () => {
    const { user } = useContext(AuthContext)
    const { data: expUser = [], isLoading, refetch } = useQuery({
        queryKey: ['experience', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/experience?email=${user?.email}`)
            return res.json()
        }
    })

    return (
        <div className='mx-6 mt-4'>
            <div className='my-4'>
                {/* <h1 className='font-semibold'>Experience</h1>
                <button className="upload">Add</button> */}
                <AddExperience />
            </div>
            {
                expUser.length > 0 ? <div>
                {
                    expUser.map(exp => <div
                        key={exp._id}
                        className='border-2 rounded-lg p-3 mb-2'
                    >
                        <h1 className='font-semibold'>{exp.year} Years</h1>
                        <p>{exp.type}</p>
                        <p>{exp.title}</p>
                    </div>)
                }
            </div> : <p className='text-center text-sky-500 font-semibold'>Add your experiences by clicking edit</p>
            }
        </div>

    );
};

export default Experience;