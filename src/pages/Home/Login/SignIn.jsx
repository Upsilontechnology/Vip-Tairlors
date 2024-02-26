import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import { Helmet } from 'react-helmet-async';
import LoginImg from "..//../../assets/loginImg.jpg"
import LoginIcon from "..//../../assets/loginIcon2.png"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';


const SignIn = () => {
    const { signInUser, googleSignIn } = useAuth();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        // signing in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Wow....!',
                    text: 'Successfully logged in'
                })
                // navigate(location?.state ? location?.state : '/')


            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className='flex flex-col space-y-10 justify-center items-center'>
            {/* <Helmet>
                <title>JobsWorld | Login </title>
            </Helmet> */}
            <div className='bg-gradient-to-r from-[#252424] to-[#463636] w-full text-center p-5 text-white'>
                <h1 className="text-4xl font-bold">Login</h1>
            </div>
            <div className='w-1/2 px-10'>
                <div className=' border-2 rounded-lg border-gray-500 px-2'>
                    <div className=''>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control mb-4 border-b-2 flex justify-center">
                                <div className='absolute pl-2'><FaUser className='text-gray-500' /></div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email" className="input pl-8 focus:outline-none focus:border-none"
                                    required />
                            </div>
                            <div className="form-control border-b-2 relative flex justify-center">
                                <div className='absolute pl-2'><FaLock className='text-gray-500' /></div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input pl-8 focus:outline-none focus:border-none" required />
                                <span className='absolute right-0 cursor-pointer mr-2' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </div>
                            <div>
                                {
                                    error ? <p className='text-red-600'>{error}</p> : ''
                                }
                            </div>
                            <div className='flex justify-between mt-2'>
                                <div className=''>
                                    <input type="checkbox" name="checkbox" id="checkbox" className='cursor-pointer' />
                                    <label htmlFor="checkbox" className='font-bold ml-1 cursor-pointer'>Remember Me</label>
                                </div>
                                <div>
                                    <h4 className='text-right my-2 text-blue-600 cursor-pointer'>Forgot Password</h4>
                                </div>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-zinc-600 text-white hover:btn-ghost">Log In</button>
                            </div>

                            <div className='mt-2'>
                                <p>Do not have an account? <Link className='font-semibold text-blue-600 underline' to='/register'>Register Now</Link></p>
                            </div>
                        </form>
                    </div>
                    {/* PopUp componenets */}
                    <div className='mb-3'>
                        <p className='text-center font-semibold mb-5 text-2xl'>Or Login with</p>
                        <div className='mt-2 rounded-full py-1 px-2 text-white flex justify-center items-center gap-4'>
                            <button onClick={handleGoogle} className='font-semibold p-2 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded-full transition duration-300'>
                                <span className='lg:text-2xl text-base flex gap-3 justify-center items-center text-black w-full'><FaGoogle className='text-red-400'></FaGoogle ></span>
                            </button>
                            <button className='font-semibold p-2 flex items-center justify-center hover:bg-slate-300 transition duration-300 rounded-full bg-slate-200'>
                                <span className='lg:text-2xl text-base flex gap-3 justify-center items-center text-black w-full'><FaFacebook className='text-blue-500' /></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignIn;