
import { NavLink } from "react-router-dom";


const InstructorMenu = () => {
    return (
        <div>
            <ul>
                <li className="menu-bar">
                    <NavLink to="/dashboard/addCourses" className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>
                        <img src="https://i.ibb.co/4PVS8MW/Frame-4.png" alt="" className="w-4 h-4" /> Add Courses</NavLink>
                </li>
                

                <li className="menu-bar">
                    <NavLink to="/dashboard/instructorCourses" className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>
                        <img src="https://i.ibb.co/Tb2p10k/Frame-3-1.png" alt="" className="w-4 h-4" /> My Courses</NavLink>
                </li>
            </ul>

        </div>
    );
};

export default InstructorMenu;