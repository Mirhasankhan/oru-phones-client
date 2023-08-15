import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin";


const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {        
        const pass = (watch("password"));
        const confirmPass = (watch("RetypePassword"))
        if (pass !== confirmPass) {
            toast.error("Password Didn't Match", {
                position: 'top-right',
                style: { backgroundColor: 'black', color: 'white' }
            })
            return;
        }
        else {
            createUser(data.email, data.password)
                .then(() => {                  
                    updateUserProfile(data.name)
                        .then(() => {
                            const insertUser = { name: data.name, email: data.email, phone: data.phone}
                            fetch('https://oru-phones-server2-mirhasankhan.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify(insertUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset()
                                        toast.success('Account created successfully', {
                                            position: 'top-right',
                                            style: { backgroundColor: 'blue', color: 'white' }
                                        })
                                    }
                                })
                          
                        })
                })
                .catch((error) => {
                    toast.error(error.message, {
                        position: 'top-right',
                        style: { backgroundColor: 'black', color: 'white' }
                    })
                })
        }
    };

    return (
        <div className='py-10'>
            <Helmet>
                <title>SignUp | ORU Phones</title>
            </Helmet>
            <div className='md:w-2/5 w-2/3 border-2 mx-auto bg-white rounded-lg p-3'>
                <h1 className='font-semibold text-2xl text-center'>Create your Oru<span className='text-sky-400'>Phones</span> Account</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Type Your Name" className="input-style" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Type Your Email" className="input-style" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Phone Number</span>
                        </label>
                        <input {...register("phone", { required: true })} type="number" placeholder="Insert Phone Number" className="input-style" />
                        {errors.email && <span className="text-red-600">Phone Number is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Password</span>
                        </label>
                        <input {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} type="password" placeholder="Type Your Password" className="input-style" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-500">Confirm Password</span>
                        </label>
                        <input {...register("RetypePassword", { required: true })} type="password" placeholder="ReType Your Password" className="input-style" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="login-btn" type="submit" value="Sign Up" />
                    </div>
                </form>

                <h1 className="pl-6">Already have an account? <Link className='text-blue-600' to="/login">Login</Link></h1>
                <div className="divider">Or</div>
                <SocialLogin/>
            </div>
        </div>
    );
};

export default Register;