
import { FaLanguage, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
    return (
        <div>
            <ul>
                <li className="menu-bar">
                    <NavLink to="/dashboard/allUsers" className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>
                      <FaUserAlt className=""></FaUserAlt>  All Users 
                    </NavLink></li>

                <li className="menu-bar ">
                    <NavLink to="/dashboard/allCourses" className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>
                    <FaLanguage></FaLanguage> All Course</NavLink></li>
            </ul>
        </div>
    );
};

export default AdminMenu;