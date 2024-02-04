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
        ]
    },
    {
        path: '/dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: '/dashboard',
                element: <AllProduct></AllProduct>
            },
            {
                path: 'statement',
                element: <Statement></Statement>
            }
        ]
    }
]);

export default router;