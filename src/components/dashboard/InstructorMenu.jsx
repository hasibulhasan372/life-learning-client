import { NavLink } from "react-router-dom";


const InstructorMenu = () => {
    return (
        <div>
            <NavLink to="/dashboard/addCourses">Add Courses</NavLink>
        </div>
    );
};

export default InstructorMenu;