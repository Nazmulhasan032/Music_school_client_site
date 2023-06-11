
import { FaCalendarAlt, FaHome, FaUsers, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

   
    const [isAdmin] = useAdmin();



    return (
        <>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">


                        {
                            isAdmin ? <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/manageInstructor">Manage all Instructor</NavLink></li>
                                <li><NavLink to="/dashboard/manageClass">Manage all Classes</NavLink></li>
                                <li><NavLink to="/dashboard/addclass">Add new Class</NavLink></li>
                                <li><NavLink to="/dashboard/allusers">All Users</NavLink></li>

                            </> : <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/profile"><FaUsers></FaUsers> My Profile</NavLink></li>

                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to="/"> Home</NavLink> </li>
                        <li><NavLink to="/instructor"> Instructor</NavLink></li>
                        <li><NavLink to="/classes"> Classes</NavLink></li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;