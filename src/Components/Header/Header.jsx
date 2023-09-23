
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeLinkStyle = {
        fontWeight: 'bold',
        color: 'blue',
    };

    const links = <>
        <li><NavLink  to="/" className={({ isActive }) => isActive ? 'bg-base-200 font-bold' : 'bg-transparent'}>Home</NavLink></li>
        <li><NavLink to="/jobs" className={({ isActive }) => isActive ? 'bg-base-200 font-bold' : 'bg-transparent'}>Jobs</NavLink></li>
        <li><NavLink to="/applied" className={({ isActive }) => isActive ? 'bg-base-200 font-bold' : 'bg-transparent'}>Applied Jobs</NavLink></li>
        <li><NavLink to="/statistcs" className={({ isActive }) => isActive ? 'bg-base-200 font-bold' : 'bg-transparent'}>Statistcs</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive }) => isActive ? 'bg-base-200 font-bold' : 'bg-transparent'}>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Career Hub </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn px-4 py-3 border-black bg-base-200">Start Apply</a>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;