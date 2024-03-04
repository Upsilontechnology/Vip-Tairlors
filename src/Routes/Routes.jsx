import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProduct from "../pages/Dashboard/AllProduct/AllProduct";
import Login from "../pages/Home/Login/SignIn.jsx"
import Registation from "../pages/Home/Registation/Registation.jsx";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome.jsx";
import ContactUs from "../pages/ContactUs/ContactUs.jsx";
import OrderedProduct from "../pages/Dashboard-Employee/OrderedProduct/OrderedProduct.jsx";
import EmployeeHome from "../pages/Dashboard-Employee/EmployeeHome/EmployeeHome.jsx";
import OrderedList from "../pages/Dashboard-Employee/OrderedList/OrderedList.jsx";
import MembersRequest from "../pages/Dashboard/MembersRequest/MembersRequest.jsx";
import AllMembers from "../pages/Dashboard/AllMembers/AllMembers.jsx";
import Errorpage from "../pages/ErrorPage/Errorpage.jsx";
import EmployeeRoute from "./EmployeeRoute.jsx";
import AdminRoute from "./AdminRoute.jsx";
import ProductStatement from "../pages/Dashboard/ProductStatement/ProductStatement.jsx";
import OrderStatement from "../pages/Dashboard/OrderStatement/OrderStatement.jsx";
import NoticePage from "../pages/NoticePage/NoticePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/notice",
                element: <NoticePage />
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            // {
            //     path: 'dash-home',
            //     element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            // },
            // {
            //     path: 'productList',
            //     element: <AdminRoute><AllProduct></AllProduct></AdminRoute>
            // },
            // {
            //     path: 'productStatement',
            //     element: <AdminRoute><ProductStatement></ProductStatement></AdminRoute>
            // },
            // {
            //     path: 'orderStatement',
            //     element: <AdminRoute><OrderStatement></OrderStatement></AdminRoute>
            // },
            // {
            //     path: 'membersRequest',
            //     element: <AdminRoute><MembersRequest></MembersRequest></AdminRoute>
            // },
            // {
            //     path: 'allMembers',
            //     element: <AdminRoute><AllMembers></AllMembers></AdminRoute>
            // },
            // {
            //     path: 'employee-home',
            //     element: <EmployeeRoute><EmployeeHome></EmployeeHome></EmployeeRoute>
            // },
            // {
            //     path: 'productList',
            //     element: <EmployeeRoute><AllProduct></AllProduct></EmployeeRoute>
            // },
            // {
            //     path: 'addProduct',
            //     element: <EmployeeRoute><AddProduct></AddProduct></EmployeeRoute>
            // },
            // {
            //     path: 'ordered',
            //     element: <EmployeeRoute><OrderedProduct></OrderedProduct></EmployeeRoute>
            // },
            // {
            //     path: "orderedList",
            //     element: <EmployeeRoute><OrderedList></OrderedList></EmployeeRoute>
            // }
        ]
    },
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Registation></Registation>
    },
    {
        path: '/',
        element: <Home />,
        children: [
            // admin routes
            {
                path: '/',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'productList',
                element: <AdminRoute><AllProduct></AllProduct></AdminRoute>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'productStatement',
                element: <AdminRoute><ProductStatement></ProductStatement></AdminRoute>
            },
            {
                path: 'orderStatement',
                element: <AdminRoute><OrderStatement></OrderStatement></AdminRoute>
            },
            {
                path: 'membersRequest',
                element: <AdminRoute><MembersRequest></MembersRequest></AdminRoute>
            },
            {
                path: 'allMembers',
                element: <AdminRoute><AllMembers></AllMembers></AdminRoute>
            },
            // employee
            {
                path: '/',
                element: <EmployeeRoute><EmployeeHome></EmployeeHome></EmployeeRoute>
            },
            {
                path: 'productList',
                element: <EmployeeRoute><AllProduct></AllProduct></EmployeeRoute>
            },
            {
                path: 'addProduct',
                element: <EmployeeRoute><AddProduct></AddProduct></EmployeeRoute>
            },
            {
                path: 'ordered',
                element: <EmployeeRoute><OrderedProduct></OrderedProduct></EmployeeRoute>
            },
            {
                path: "orderedList",
                element: <EmployeeRoute><OrderedList></OrderedList></EmployeeRoute>
            }
        ]
    },
]);

export default router;