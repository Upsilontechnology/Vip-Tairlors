// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Footer from '../../shared/Footer/Footer';
// import Navbar from '../../shared/Navbar/Navbar';
// import useAuth from '../../hooks/useAuth';
// import useUser from '../../hooks/useUser';

// const MainLayout = () => {
//     const [loggedUser, setLoggedUser] = useState([]);
//     const [users] = useUser();
//     const { user} = useAuth();

//     useEffect(() => {
//         if (user && users) {
//             const filteredUser = users.find(us => us.email === user.email);
//             setLoggedUser(filteredUser ? [filteredUser] : []);
//         } else {
//             setLoggedUser([]);
//         }
//     }, [users, user]); // Dependencies for useEffect



//     return (
//         <div>
//             {loggedUser.map(user => (
//                 <div key={user?._id}>
//                     {user?.role === "user" && <Navbar />}
//                 </div>
//             ))}
//             <Outlet />
//             {loggedUser.map(user => (
//                 <div key={user?._id}>
//                     {user?.role === "user" && <Footer />}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MainLayout;


import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import SignIn from '../../pages/Home/Login/SignIn';

const MainLayout = () => {
    const [loggedUser, setLoggedUser] = useState(null); // Initialize with null or an empty object
    const [users] = useUser();
    const { user } = useAuth();

    useEffect(() => {
        if (user && users) {
            const filteredUser = users.find(us => us.email === user.email);
            setLoggedUser(filteredUser || null); // Set to null if no user found
        } else {
            setLoggedUser(null);
        }
    }, [users, user]);

    // Ensure loggedUser is resolved
    if (loggedUser === null) {
        return <SignIn></SignIn>; // Add loading state or spinner if necessary
    }

    return (
        <div>
            {loggedUser && loggedUser.role === "user" && <Navbar />}
            <Outlet />
            {loggedUser && loggedUser.role === "user" && <Footer />}
        </div>
    );
};

export default MainLayout;






