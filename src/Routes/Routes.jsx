import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AllProduct from "../pages/Dashboard/AllProduct/AllProduct";
import Login from "../pages/Home/Login/SignIn.jsx"
import Statement from "../pages/Dashboard/Statement/Statement.jsx";
import Registation from "../pages/Home/Registation/Registation.jsx";
import EmployeeDashboard from "../pages/Dashboard-Employee/EmployeeDashbaord/EmployeeDashbaord.jsx";
import Category from "../pages/Home/Category/Category.jsx";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Registation />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: "/dashboard",
                element: <AdminHome></AdminHome>
            },
            {
                path: 'productList',
                element: <AllProduct></AllProduct>
            },
            {
                path: 'statement',
                element: <Statement></Statement>
            }
        ]
    },
    {
        path: "/dashboard2",
        element: <EmployeeDashboard></EmployeeDashboard>,
        children: [
            {
                path: '/dashboard2',
                element: <Category></Category>
            },
            {
                path: 'allProduct',
                element: <AllProduct></AllProduct>
            }
        ]
    }
]);

export default router;