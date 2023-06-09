import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    // const [isAdmin] = useAdmin();



    return (
        <>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#84817a]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">

                        
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    {/* <span className="badge inl badge-secondary">+{cart?.length || 0}</span> */}
                                </NavLink>

                            </li>
                        </>
                    }
                        
                        
                        
                        
                        
                        
                        {/* <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/profile"><FaUsers></FaUsers> My Profile</NavLink></li> */}

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