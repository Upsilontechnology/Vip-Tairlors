
import { IoPersonOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';

const Navbar2 = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const inputRef = useRef();
    const [code, setCode] = useState();
    
    const handleProductCode = e =>{
        e.preventDefault();
        setCode(inputRef);
    }


    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logged Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Successfully logged out",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })
            }
        });
    }

    return (
        <div>
            <div className='max-w-[1280px] w-full mx-auto border-b-2 border-gray-400'>
                <div className="navbar">
                    <div className="w-44 md:w-[600px] lg:w-[700px]">
                        <div className="form-control w-full">
                            <input ref={inputRef} onChange={handleProductCode} type="text" placeholder="Search your product" className="input input-bordered focus:outline-none" />
                        </div>
                    </div>
                    <div className="navbar-end">
                        <button onClick={handleLogout} className="btn"><IoPersonOutline className='text-xl' /> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;