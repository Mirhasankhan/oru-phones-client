import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const AddExperience = ({refetch}) => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [differenceInYears, setDifferenceInYears] = useState(null);
    const [type, setType] = useState('')
    const [title, setTitle] = useState('')

    const getType = (e) => {
        const text = e.target.value;
        setType(text)
    }
    const getTitle = (e) => {
        const course = e.target.value;
        setTitle(course)

    }

    const handleStartDateChange = (date) => {
        setStartDate(date);
        calculateDifference(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        calculateDifference(startDate, date);
    };

    const calculateDifference = (start, end) => {
        if (start && end) {
            const startYear = start.getFullYear();
            const endYear = end.getFullYear();
            const difference = endYear - startYear;

            setDifferenceInYears(difference);
        } else {
            setDifferenceInYears(null);
        }
    };

    const handleAddExperience = ()=>{
        const newExperience = {year: differenceInYears, email: user?.email, type: type, title: title}
        fetch('https://oru-phones-server2-mirhasankhan.vercel.app/experience', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newExperience)
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            toast.success('Experience Updated', {
                position: 'top-right',
                style: { backgroundColor: 'blue', color: 'white' }
            })
        })
        .catch(erro =>{
            console.log(erro);
        })
    }


    return (
        <div className='mt-4'>
            <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box">
                    <div className="DateDifferenceCalculator flex gap-5">
                        <div>
                            <label>Start Date:</label>
                            <DatePicker className='border-2 p-2 rounded-md' selected={startDate} onChange={handleStartDateChange} />
                        </div>
                        <div>
                            <label>End Date:</label>
                            <DatePicker className='border-2 p-2 rounded-md' selected={endDate} onChange={handleEndDateChange} />
                        </div>
                        {differenceInYears !== null && (
                            <p>{differenceInYears} years</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="">Job Type:</label>
                        <input onChange={getType} className='border-2 p-1 ml-2' required type="text" placeholder='full time or part time' />
                    </div>
                    <div>
                        <label htmlFor="">Job Title:</label>
                        <input onChange={getTitle} className='border-2 p-1 ml-2' required type="text" />
                    </div>
                    <h1 onClick={handleAddExperience} className='btn mt-4'>Add Now</h1>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
            <div className='flex justify-between items-center my-4'>
                <h1 className='font-semibold'>Experience</h1>
                <button className="upload" onClick={() => window.my_modal_5.showModal()}>Add</button>
            </div>           
        </div>
        
    );
};

export default AddExperience;