import { Link, NavLink, Outlet } from "react-router-dom";
import { BiChevronRight } from 'react-icons/Bi';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import spinner from '../../assets/loading.json'
import { FaRegBell } from 'react-icons/fa';

const Dashboard = () => {
    const { logOut, loading, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("logout Successfully")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (loading ? <div className='flex justify-center items-center'><Lottie style={{ height: '400px', width: '600px' }} animationData={spinner} loop={true} /> </div> :
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {
                    user && <div className="my-3 mr-6 ml-auto w-1/3 flex">
                        <FaRegBell className="my-auto mr-4 text-4xl" />
                        <div className="border-2 p-2 w-full mr-6 flex gap-4 justify-start rounded-lg">
                            <img className="h-12 w-12 rounded-2xl" src={user?.photoURL} alt="" />
                            <div className="hidden md:block">
                                <h1>Welcome Back</h1>
                                <h1 className="font-bold text-xl text-sky-500">{user?.displayName}</h1>
                            </div>
                        </div>
                    </div>
                }

                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full bg-white text-base-content">
                    {/* Sidebar content here */}

                    <Link className="dashboard" to="/">Dashboard</Link>
                    <NavLink className={({ isActive }) => (isActive ? "active-page" : "none-active-page")} to="/myProfile">My Profile</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-page" : "none-active-page")} to="/myConnections">My Connections</NavLink>
                    <button onClick={handleLogOut} className="logout mt-auto">Logout</button>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;