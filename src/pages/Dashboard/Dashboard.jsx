import { useState } from "react";
import EmployeeDashboard from "../Dashboard-Employee/EmployeeDashbaord/EmployeeDashbaord.jsx";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import useUser from "../../hooks/useUser.jsx";

const Dashboard = () => {
    const [users, refetch] = useUser();
    // console.log(users)

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
            {users?.map(user => <div key={user?._id}>
                {
                    user?.role === "User" ? <EmployeeDashboard
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
