import { MdLogout } from "react-icons/md"
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import useAdmin from '../../hooks/useAdmin'
import { FaBookOpen, FaChalkboardTeacher, FaHome, FaUserAlt } from "react-icons/fa";
import InstructorMenu from "./InstructorMenu";
import StudentMenu from "./StudentMenu";
import useVerifyInstructor from "../../hooks/useVerifyInstructor";

const Sidebar = () => {
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useVerifyInstructor();
    const navigate = useNavigate();
    const handleLogOut = () =>{
        logOut();
        navigate("/")
    }
    return (
        <div className=" w-24 sm:w-32 md:w-48 lg:w-64 border h-screen bg-sky-100">
            <div className="py-3 sm:py-4 md:py-6 md:px-2 flex flex-col justify-between h-full ">
                <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-10 md:text-center ">
                    <div className="">
                        <li className="mb-1 list-none">
                            <Link to="/" >
                                {
                                    user && user?.photoURL ? <img src={user?.photoURL} alt="user" className=" w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-32 lg:h-32 rounded-full mx-auto object-cover" /> : <FaUserAlt
                                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-32 lg:h-32 rounded-full mx-auto"></FaUserAlt>
                                }
                            </Link>
                        </li>
                        <li className=" list-none">
                            <Link to="/" className="font-medium">Email: <span className="text-sm text-green-600">{user?.email}</span> </Link>
                        </li>
                    </div>
                    <div className="text-left md:pl-7 lg:pl-12">
                        {isAdmin ?
                            <AdminMenu></AdminMenu> :
                            (
                                <div>{isInstructor ? <InstructorMenu></InstructorMenu> :
                                    <StudentMenu></StudentMenu>}</div>
                            )}

                    </div>
                    <div className="md:mt-12 lg:mt-20 border-t-4 border-sky-500 md:pt-6 lg:pt-10 text-left md:pl-7 lg:pl-12">
                        <li className="menu-bar">  <Link to='/' className="gap-2 flex items-center"> <FaHome></FaHome> Home</Link></li>
                        <li className=" menu-bar"> <Link to='/instructors' className="gap-2 flex items-center"><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</Link></li>
                        <li className=" menu-bar"><Link to='/courses' className="gap-2 flex items-center"><FaBookOpen></FaBookOpen> Courses</Link></li>
                    </div>
                </div>
                <div className="md:pl-7 lg:pl-12">
                    <button onClick={handleLogOut}
                    className=" sm:text-lg md:text-xl font-medium  md:font-semibold flex items-center gap-1"><MdLogout></MdLogout>Log Out</button>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;