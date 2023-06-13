import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {FaUserAlt} from "react-icons/fa"
import { useState } from "react";
import useSelectCourse from "../../hooks/useSelectCourse";


const Navbar = () => {
    const {user, logOut} = useAuth();
    const [open, setOpen] = useState(false);
    const [selectCourses] = useSelectCourse()
   

    const handleLogOut = ()=>{
        logOut();
        setOpen(false);
    }
    return (
        <div className="navbar-con bg-sky-50">
            <div className="flex justify-between items-center  h-12 md:h-16 lg:h-[70px]  shadow-sm ">
            <div>
                <Link to="/" className="flex md:gap-3 items-center">
                    <img src="" alt="" />
                    <h2 className="logo-name">Life Learning</h2>
                </Link>
            </div>
            <div className="">
               <ul className="md:hover:transition md:hover:duration-500 md:space-x-6 lg:space-x-10  flex items-center ">
               <li className="menu-bar">  <Link to='/'>Home</Link></li>
                <li className=" menu-bar"> <Link to='/instructors' className="">Instructors</Link></li>
                <li className=" menu-bar"><Link to='/courses' className="">Courses</Link></li>
               {user?.email &&  <li className="menu-bar relative"> <Link to='/dashboard' className="">Dashboard {selectCourses.length > 0 && <small className="absolute -top-2 text-sky-600 font-bold">+{selectCourses.length}</small>} </Link></li>}
               </ul>
            </div>
            <div>
                {
                    user?  <>
                    {
                        user && user?.photoURL ? <button onClick={()=> setOpen(!open) } 
                        className="relative"
                        ><img src={user?.photoURL} alt="user" className=" w-7 h-7 md:w-12 md:h-12 rounded-full object-cover" /></button> : <FaUserAlt></FaUserAlt>
                    }
                    </> :
                    <Link to='/login' className="btn btn-sm  bg-gradient-to-r from-purple-600 to-red-500 text-white capitalize font-semibold">Login</Link>
                }
            </div>
            {
                open ? <button onClick={handleLogOut} className="btn btn-sm absolute top-[70px] right-0">Log Out</button> : ""
            }
            </div>
        </div>
    );
};

export default Navbar;