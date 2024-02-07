import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProduct from "../pages/Dashboard/AllProduct/AllProduct";
import Login from "../pages/Home/Login/SignIn.jsx"
import Statement from "../pages/Dashboard/Statement/Statement.jsx";
import Registation from "../pages/Home/Registation/Registation.jsx";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome.jsx";
import ContactUs from "../pages/ContactUs/ContactUs.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import OrderedProduct from "../pages/Dashboard-Employee/OrderedProduct/OrderedProduct.jsx";
import EmployeeHome from "../pages/Dashboard-Employee/EmployeeHome/EmployeeHome.jsx";
import OrderedList from "../pages/Dashboard-Employee/OrderedList/OrderedList.jsx";

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
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin routes
            {
                path: 'dash-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'productList',
                element: <AllProduct></AllProduct>
            },
            {
                path: 'statement',
                element: <Statement></Statement>
            },
            {
                path: 'dash-home',
                element: <AdminHome></AdminHome>
            },
            // employee
            {
                path: 'employee-home',
                element: <EmployeeHome></EmployeeHome>
            },
            {
                path: 'productList',
                element: <AllProduct></AllProduct>
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'ordered',
                element: <OrderedProduct></OrderedProduct>
            },
            {
                path: 'productList'
            },
            {
                path: "orderedList",
                element: <OrderedList></OrderedList>
            }
        ]
    },
]);

export default router;