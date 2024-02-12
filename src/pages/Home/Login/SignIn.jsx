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
    const {signInUser} = useAuth();
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
        // signInPopUp()
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }


    return (
        <div className='supershop-container grid md:grid-cols-2 grid-cols-1'>
            {/* <Helmet>
                <title>JobsWorld | Login </title>
            </Helmet> */}
            <div className='h-[675px] hidden md:block'>
                <img src={LoginImg} alt="" className='h-full object-cover rounded-l-lg ' />
            </div>
            <div className='border-2 rounded-r-lg border-gray-500 py-5 px-2'>
                <div className=''>
                    <div className='w-full flex justify-center items-center '>
                        <img src={LoginIcon} alt="" className='w-[5rem] object-cover' />
                    </div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control mb-6 border-b-2 flex justify-center">
                        <div className='absolute pl-2'><FaUser className='text-gray-500'/></div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" className="input pl-8 focus:outline-none focus:border-none"
                                required />
                        </div>
                        <div className="form-control border-b-2 relative flex justify-center">
                            <div className='absolute pl-2'><FaLock className='text-gray-500'/></div>
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
                        <div className='flex justify-between mt-4'>
                            <div className=''>
                                <input type="checkbox" name="checkbox" id="checkbox" className='cursor-pointer' />
                                <label htmlFor="checkbox" className='font-bold ml-1 cursor-pointer'>Remember Me</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary hover:btn-ghost">Sign In</button>
                        </div>
                        <div>
                            <h4 className='text-right my-2 text-orange-500 cursor-pointer'>Forgot Password</h4>
                        </div>
                        <div className='mt-2'>
                            <p>Do not have an account? <Link className='font-semibold text-orange-500 underline' to='/register'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
                {/* PopUp componenets */}
                <div className=' mt-8'>
                    <p className='text-center font-semibold mb-5 text-2xl'>Or login wth</p>
                    <div className='mt-2 rounded-full py-1 px-2 text-white flex justify-center items-center gap-4'>
                        <button onClick={handleGoogle} className='font-semibold p-2 flex items-center justify-center bg-slate-200 hover:bg-slate-300 rounded-full transition duration-300'>
                            <span className='lg:text-2xl text-base flex gap-3 justify-center items-center text-black w-full'><FaGoogle className='text-red-400'></FaGoogle ></span>
                        </button>
                        <button onClick={handleGoogle} className='font-semibold p-2 flex items-center justify-center hover:bg-slate-300 transition duration-300 rounded-full bg-slate-200'>
                            <span className='lg:text-2xl text-base flex gap-3 justify-center items-center text-black w-full'><FaFacebook className='text-blue-500'/></span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignIn;