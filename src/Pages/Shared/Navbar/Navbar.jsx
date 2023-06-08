
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-8">
                <div className="navbar-start">
                    <div className='w-[50px]'>
                        <img src={logo} alt="" />
                    </div>
                    <Link to='/'><a className="font-bold text-xl">Nazmul Music Academy</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/instructor'><li><a>Instructor</a></li></Link>
                        <Link to='/classes'><li><a>Classes</a></li></Link>
                        <Link to='/dashboard'><li><a>DashBoard</a></li></Link>
                        <Link to='/login'><li><a>LogIn</a></li></Link>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;