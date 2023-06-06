import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar-con flex justify-between items-center bg-sky-50 h-12 md:h-30  shadow-sm">
          <div>
          <Link to="/" className="flex md:gap-3 items-center">
                <img src="" alt="" />
                <h2 className="logo-name">Life Learning</h2>
            </Link>
          </div>
          <div className="md:space-x-6 lg:space-x-10 text-lg font-semibold  ">
            <Link to='/' className="">Home</Link>
            <Link to='/instructors' className="">Instructors</Link>
            <Link to='/classes' className="">Classes</Link>
            <Link to='/dashboard' className="">Dashboard</Link>
          </div>
          <div>
          <Link to='/login' className="btn btn-sm  bg-gradient-to-r from-purple-600 to-red-500 text-white capitalize font-semibold">Login</Link>
          </div>
        </div>
    );
};

export default Navbar;