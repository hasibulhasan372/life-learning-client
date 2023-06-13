import { NavLink } from "react-router-dom";


const StudentMenu = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/dashboard/selectedCourses">Selected Courses</NavLink></li>
                <li><NavLink to="/dashboard/enrolledCourses">Enrolled Courses</NavLink></li>
            </ul>
        </div>
    );
};

export default StudentMenu;