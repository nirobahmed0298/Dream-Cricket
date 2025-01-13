import logo from '../../assets/logo.png'
import PropTypes from 'prop-types';
const Header = ({coin}) => {
    return (
        <header className='sticky top-0 backdrop-blur-xl z-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="text-xl hidden md:block"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-end">
                <div className="mr-5 hidden lg:flex items-center">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                </div>
                    <a className="btn border-2 px-2 py-1 lg:px-5 lg:py-2 rounded-md font-bold"><span className="font-normal">{coin}</span> Coin <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></a>
                </div>
            </div>
        </header>
    );
};
Header.propTypes={
    coin:PropTypes.number,
}
export default Header;