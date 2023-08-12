import { Link, NavLink, Outlet } from "react-router-dom";
import { BiChevronRight } from 'react-icons/Bi';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
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
                    <button className="btn btn-primary mt-auto">Logout</button>            
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;