import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyConncetions from "../Pages/Dashboard/MyConnections/MyConncetions";
import Register from "../Pages/SingUp/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Error from "../Components/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <DashboardHome/>
            },
            {
                path: 'myProfile',
                element: <PrivateRoute><MyProfile/></PrivateRoute>
            },
            {
                path: 'myConnections',
                element: <PrivateRoute><MyConncetions/></PrivateRoute>
            }
        ]
    },
    {
        path: '/signUp',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default router