
import logo from '../../../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className='w-[50px]'>
                        <img src={logo} alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Nazmul Music Academy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        
                        <li><a>Item 3</a></li>
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