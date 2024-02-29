
import RegistationImg from "../../../assets/loginImg.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { updateProfile } from "@firebase/auth";

const Registation = () => {
    const { createUser, googleSignIn } = useAuth();
    const [error, setError] = useState();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const hanldeRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {
            name: form.name.value,
            email: form.email.value,
            role: "user"
        }

        setError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                // updated user profile
                updateProfile(result?.user, {
                    displayName: form.name.value,
                    photoURL: "https://i.ibb.co/wzY7xRG/bronze.png"
                });

                // insert user data to the database
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        if (res.data.message === "Success") {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Successfully registered",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // google sign in
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className=''>
            <div className='bg-gradient-to-r from-[#252424] to-[#463636] w-full text-center p-5 text-white'>
                <h1 className="text-4xl font-bold">Register Now</h1>
            </div>
            <div className='flex flex-col p-2 rounded-lg w-1/2 mx-auto my-5'>
                <div className='bg-gray-200 py-3 px-4'>
                    <form onSubmit={hanldeRegister} className='flex flex-col gap-4 mt-2'>
                        <div className='flex justify-center flex-row gap-4 items-center relative'>
                            <input type="text" placeholder='Name'
                                name='name'
                                className='w-full py-3 rounded-lg border outline-none pl-8 pr-2'
                            />
                        </div>
                        <div className='flex justify-center flex-col items-center relative'>
                            <input type="text" placeholder='Email' name='email'
                                className='w-full py-3 rounded-lg border outline-none pl-8 pr-2'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center relative'>
                            <input type="password" placeholder='Password' name='password'
                                className='w-full py-3 rounded-lg border outline-none pl-8 pr-2'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center relative'>
                            <input type="file" placeholder='' name='image'
                                className='input input-bordered focus:outline-none w-full py-2'
                            />
                        </div>

                        <div className='px-1 mt-3 flex flex-row justify-between items-center'>
                            <div className="flex gap-2">
                                <input type="checkbox" name="checkbox" id="checkbox" className='cursor-pointer' />
                                <label htmlFor="checkbox" className='flex gap-2 cursor-pointer text-indigo-500'>Remember me</label>
                            </div>
                            <div>
                                <h4 className='text-right my-2 text-blue-600 cursor-pointer'>Forgot Password</h4>
                            </div>
                        </div>
                        <div className="px-[16%] flex gap-2">
                            {
                                error ? <p className='text-red-600'>{error}</p> : ''
                            }
                        </div>
                        <div className='flex justify-center text-xl font-semibold text-white font-mono'>
                            <button className='px-[25%] py-3 bg-zinc-600 text-white hover:btn-ghost rounded-lg'>Register</button>
                        </div>
                    </form>
                    <div className=' mt-7'>
                        <h4 className='flex gap-2'>Already have an account? <Link to={"/login"} className='text-indigo-500 font-semibold cursor-pointer'>Log In</Link></h4>
                    </div>
                    <div className=''>
                        <h3 className='text-center mt-8 orContinueWith'>Or Continue With</h3>
                    </div>
                    <div className='flex justify-center gap-6 mt-6'>
                        <button onClick={handleGoogle} className='border flex items-center gap-2 text-xl px-7 hover:border-[#000] transition-all duration-300 border-[#c3c3c3] rounded-lg py-3 font-mono'><FcGoogle className='text-2xl' /> Google</button>
                        <button className='border flex items-center gap-2 text-xl border-[#c3c3c3] hover:border-[#000] transition-all duration-300 rounded-lg px-4 py-3 font-mono'><FaSquareFacebook className='text-2xl text-blue-700' /> Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registation
