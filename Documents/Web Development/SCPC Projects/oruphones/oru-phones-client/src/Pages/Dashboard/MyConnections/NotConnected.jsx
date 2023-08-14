import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Connect from './Connect';

const NotConnected = () => {
    const { data: totalUser = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json()
        }
    })
   
    return (
        <div className='mx-6 mt-4'>
            <h1 className='font-semibold text-purple-600'>People you can also connect</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    totalUser.map(user => <Connect key={user._id} user={user}></Connect>)
                }
            </div>
        </div>
    );
};

export default NotConnected;