import { useState } from "react";
import EmployeeDashboard from "../Dashboard-Employee/EmployeeDashbaord/EmployeeDashbaord.jsx";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

const Dashboard = () => {
    const employee = true;
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };
    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
    };
    return (
        <div>
            {employee ? <EmployeeDashboard
                isSideMenuOpen={isSideMenuOpen}
                toggleSideMenu={toggleSideMenu}
                closeSideMenu={closeSideMenu}
            /> : <AdminDashboard
                isSideMenuOpen={isSideMenuOpen}
                toggleSideMenu={toggleSideMenu}
                closeSideMenu={closeSideMenu}
            />}
        </div>
    );
};

export default Dashboard;
