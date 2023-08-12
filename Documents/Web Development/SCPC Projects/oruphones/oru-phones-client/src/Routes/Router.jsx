import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyConncetions from "../Pages/Dashboard/MyConnections/MyConncetions";
import Register from "../Pages/SingUp/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard/>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile/>
            },
            {
                path: 'myConnections',
                element: <MyConncetions/>
            }
        ]
    },
    {
        path: '/signUp',
        element: <Register></Register>
    }
])

export default router