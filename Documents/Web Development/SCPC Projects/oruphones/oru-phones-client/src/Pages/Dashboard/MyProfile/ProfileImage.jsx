import React from 'react';
import demoImg from '../../../assets/imageUpload.jpg'
import UseUser from '../../../Hooks/useUser';
import UseUpdate from '../../../Hooks/UseUpdate';

const ProfileImage = () => {
    const [currentUser, isLoading, refetch] = UseUser()    
    const uploadPhoto = (e) => {
        e.preventDefault()
        const image = e.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_TOKEN}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json()).then(imageData => {                
                const uploadImage = {image: imageData.data.display_url}
               refetch()              
               UseUpdate(currentUser[0]._id, uploadImage, refetch)
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'blue', color: 'white' }
                })
            })
    }

    return (
        <div className='w-full flex justify-between items-center mx-6'>            
            <img className='h-28 rounded-full w-28' src={currentUser[0]?.image || demoImg} alt="" />           
            <form className='ml-4'  onSubmit={uploadPhoto}>
                <input
                    name='image'
                    type="file"
                />
                <input className='upload mt-3 cursor-pointer' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ProfileImage;