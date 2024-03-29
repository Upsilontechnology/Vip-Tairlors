// import { IoPersonOutline } from 'react-icons/io5';
// import Swal from 'sweetalert2';
// import useAuth from '../../hooks/useAuth';
// import { useNavigate } from 'react-router';
// import { useEffect, useRef, useState } from 'react';

// const Navbar2 = () => {
//     const { logOut, setValue,value  } = useAuth();
//     const [filteredProducts, setFilteredProducts] = useState();
//     const navigate = useNavigate();
//     const inputRef = useRef();

//     // const handleProductCode = () => {
//     //     const inputValue = parseInt(inputRef.current.value)
//     //     setValue(inputValue);
//     //     navigate('/productList')
//     // }
//     const handleLogout = () => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, Logged Out!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 logOut()
//                     .then(() => {
//                         Swal.fire({
//                             position: "top-end",
//                             icon: "success",
//                             title: "Successfully logged out",
//                             showConfirmButton: false,
//                             timer: 1500
//                         });
//                         navigate('/')
//                     })
//             }
//         });
//     }

//     return (
//             <div className='w-full mx-auto bg-[#403030] border-b-2 border-gray-400'>
//                 <div className="navbar">
//                     <div className="w-44 md:w-[600px] lg:w-[700px]">
//                         {/* <div className="form-control w-full">
//                             <input ref={inputRef} onKeyDown={(e) => {
//                                 if (e.key === 'Enter') {
//                                     handleProductCode();
//                                 }
//                             }} type="text" placeholder="Search by Product Code" className="input input-bordered focus:outline-none" />

//                         </div> */}
//                         <h2 className='text-white font-semibold text-lg'>VIP TAIRLORS</h2>
//                     </div>
//                     <div className="navbar-end">
//                         <button onClick={handleLogout} className="btn"><IoPersonOutline className='text-xl' /> Logout</button>
//                     </div>
//                 </div>
//             </div>
//     );
// };

// export default Navbar2;




import { IoPersonOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import "./Navbar2.css";

const Navbar2 = () => {
    const { logOut, setValue, value } = useAuth();
    const [filteredProducts, setFilteredProducts] = useState();
    const navigate = useNavigate();
    const inputRef = useRef();

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

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-container');
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add('navbar-fixed');
                } else {
                    navbar.classList.remove('navbar-fixed');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-full mx-auto bg-[#403030] border-b-2 border-gray-400 navbar-container'>
            <div className="navbar">
                <div className="w-44 md:w-[600px] lg:w-[700px]">
                    <h2 className='text-white font-semibold text-lg'>VIP TAIRLORS</h2>
                </div>
                <div className="navbar-end">
                    <button onClick={handleLogout} className="btn"><IoPersonOutline className='text-xl' /> Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
