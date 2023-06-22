import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaBars, FaUserAlt } from "react-icons/fa"
import { useState } from "react";
import useSelectCourse from "../../hooks/useSelectCourse";


const Navbar = () => {
    const { user, logOut } = useAuth();
    const [logOpen, setLogOpen] = useState(false);
    const [selectCourses] = useSelectCourse();
    const [hamMenu, setHamMenu] = useState(false)


    const handleLogOut = () => {
        logOut();
        setLogOpen(false);
    }
    return (

        <div className="navbar-con bg-sky-50 ">
            <div className="flex justify-between lg:justify-start items-center  h-12 md:h-16 lg:h-[70px]  shadow-sm ">
                <div>
                    <NavLink to="/" className="flex items-center">
                        <img src="https://i.ibb.co/5rjWfBL/favicon.png" alt="" className="hidden md:block" />
                        <h2 className="logo-name">Life Learning</h2>
                    </NavLink>
                </div>
                <div className="md:hidden transition duration-500">
                    <button onClick={() => setHamMenu(!hamMenu)}><FaBars></FaBars></button>
                </div>
                <div className={`absolute  transition duration-500 md:static bg-slate-100 md:bg-none z-50  lg:flex lg:pl-96 lg:justify-between lg:grow 
                ${hamMenu ? "flex flex-col bg-slate-100 md:bg-none top-12 right-0 w-1/2 pl-4 space-y-2 pb-2" : "-top-44 right-0"}`}>

                    <ul className={`md:hover:transition md:hover:duration-500 md:space-x-6 lg:space-x-10  lg:flex lg:items-center ${hamMenu ? "flex flex-col space-y-2" : ""} `}>
                        <li className={`menu-bar `}>  <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-500" : ""}>Home</NavLink></li>
                        <li className=" menu-bar"> <NavLink to='/instructors' className={({ isActive }) => isActive ? "text-purple-500" : ""}>Instructors</NavLink></li>
                        <li className=" menu-bar"><NavLink to='/courses' className={({ isActive }) => isActive ? "text-purple-500" : ""}>Courses</NavLink></li>
                        <li className=" menu-bar"><NavLink to='/contact' className={({ isActive }) => isActive ? "text-purple-500" : ""}>Contact</NavLink></li>
                        {user?.email && <li className="menu-bar relative"> <NavLink to='/dashboard' className={({ isActive }) => isActive ? "text-purple-500" : ""}>Dashboard {selectCourses.length > 0 && <small className="absolute -top-2 text-sky-600 font-bold">+{selectCourses.length}</small>} </NavLink></li>}
                    </ul>
                    <div>
                        {
                            user ? <>
                                {
                                    user && user?.photoURL ? <button onClick={() => setLogOpen(!logOpen)}
                                        className="relative"
                                    ><img src={user?.photoURL} alt="user" className=" w-7 h-7 md:w-12 md:h-12 rounded-full object-cover" /></button> : <FaUserAlt></FaUserAlt>
                                }
                            </> :
                                <NavLink to='/login' className="btn btn-sm  bg-gradient-to-r from-purple-600 to-red-500 text-white capitalize font-semibold">Login</NavLink>
                        }

                        {
                            logOpen ? <button onClick={() => handleLogOut()} className="btn btn-sm absolute lg:top-[70px] right-0 z-10">Log Out</button> : <></>
                        }
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Navbar;