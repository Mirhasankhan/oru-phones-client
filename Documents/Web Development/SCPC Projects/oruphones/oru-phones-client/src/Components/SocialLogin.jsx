import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedInUser = result.user;
                const insertUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(insertUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success('LoggedIn successfully', {
                            position: 'top-right',
                            style: { backgroundColor: 'blue', color: 'white' }
                        })
                        navigate(from, { replace: true })
                    })

            })
            .catch((error) => {
                toast.error(error.message, {
                    position: 'top-right',
                    style: { backgroundColor: 'black', color: 'white' }
                })
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Login With Google</button>        
        </div>
    );
};

export default SocialLogin;