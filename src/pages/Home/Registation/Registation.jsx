
import RegistationImg from "../../../assets/loginImg.jpg"
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const Registation = () => {
    const { createUser, googleSignIn } = useAuth();
    const [error, setError] = useState();

    const hanldeRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        setError('');

        // console.log(userInfo)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // google sign in
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <div className='supershop-container'>
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center p-2 rounded-lg bg-[#EFF4F7]'>
                <div className='h-full hidden  md:block'>
                    <img src={RegistationImg}
                        alt=""
                        className='w-full h-full object-cover rounded-lg'
                    />
                </div>
                <div className='bg-[#EFF4F7] flex justify-center flex-col mx-auto w-full py-3'>
                    <h3 className='font-mono w-full text-center text-4xl  text-[#515050] font-semibold'>Welcome</h3>
                    <form onSubmit={hanldeRegister} className='flex flex-col gap-4 justify-center mt-14'>
                        <div className='flex justify-center flex-col items-center   relative'>
                            <input type="text" placeholder='Full Name'
                                name='name'
                                className='w-[70%] py-3 rounded-lg border outline-none pl-8 pr-2'
                            />
                            <FaUserAlt className='absolute left-0 ml-[16%] text-gray-500' />
                        </div>
                        <div className='flex justify-center flex-col items-center relative'>
                            <input type="text" placeholder='Email' name='email'
                                className='w-[70%] py-3 rounded-lg border outline-none pl-8 pr-2'
                            />
                            <MdEmail className='absolute left-0 ml-[16%] text-lg text-gray-500' />
                        </div>
                        <div className='flex flex-col items-center justify-center relative'>
                            <input type="password" placeholder='Password' name='password'
                                className='w-[70%] py-3 rounded-lg border outline-none pl-8 pr-2'
                            />
                            <FaLock className='absolute left-0 ml-[16%] text-gray-500' />
                        </div>

                        <div className='px-[16%] mt-8 flex gap-2'>
                            <input type="checkbox" name="checkbox" id="checkbox" className='cursor-pointer' />
                            <label htmlFor="checkbox" className='flex gap-2 cursor-pointer text-indigo-500'>Remember me</label>
                        </div>
                        <div className="px-[16%] flex gap-2">
                            {
                                error ? <p className='text-red-600'>{error}</p> : ''
                            }
                        </div>
                        <div className='flex justify-center mt-12 text-xl font-semibold text-white font-mono'>
                            <button className='px-[25%] py-3 hover:from-indigo-500 hover:to-sky-500 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg'>Sign Up</button>
                        </div>
                    </form>
                    <div className='ml-[16%] mt-7'>
                        <h4 className='flex gap-2'>Already have an account? <Link to={"/login"} className='text-indigo-500 font-semibold cursor-pointer'>Sign In</Link></h4>
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
