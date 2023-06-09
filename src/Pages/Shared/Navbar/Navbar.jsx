
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }




    return (
        <div>
            <div className="navbar bg-base-100 mt-8">
                <div className="navbar-start">
                    <div className='w-[50px]'>
                        <img src={logo} alt="" />
                    </div>
                    <Link to='/'>
                        <p className="font-bold text-xl">Nazmul Music Academy</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructor'>Instructor</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        <li><Link to='/dashboard/profile'>DashBoard</Link></li>
                        {
                            user ? (
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                                </li>
                            ) : (
                                <li>
                                    <Link to='/login'>LogIn</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="User Picture" />
                            </div>
                        ) : (
                            <FaUserAlt />
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default Navbar;


