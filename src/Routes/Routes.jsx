import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";

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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <AdminDashboard></AdminDashboard>,
        children: [
            
        ]
    }
]);

export default router;