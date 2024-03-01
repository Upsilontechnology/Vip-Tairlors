import { useEffect, useState } from "react";
import EmployeeDashboard from "../Dashboard-Employee/EmployeeDashbaord/EmployeeDashbaord.jsx";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import useUser from "../../hooks/useUser.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const Dashboard = () => {
    const [loggedUser, setLoggedUser] = useState();
    const [users] = useUser();
    const { user } = useAuth();
    // console.log(users)

    useEffect(() => {
        const filteredUser = users?.filter(us => us.email === user.email);
        setLoggedUser(filteredUser)
    }, [])

    // const employee = true;
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };
    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
    };
    return (
        <div>
            {loggedUser?.map(user => <div key={user?._id}>
                {
                    user?.role === "user" ? <EmployeeDashboard
                        isSideMenuOpen={isSideMenuOpen}
                        toggleSideMenu={toggleSideMenu}
                        closeSideMenu={closeSideMenu}
                    /> : <AdminDashboard
                        isSideMenuOpen={isSideMenuOpen}
                        toggleSideMenu={toggleSideMenu}
                        closeSideMenu={closeSideMenu}
                    />
                }
            </div>)}
        </div>
    );
};

export default Dashboard;
