import { NavLink } from "react-router-dom";


const InstructorMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/dashboard/addCourses">Add Courses</NavLink>
                </li>

                <li>
                    <NavLink to="/dashboard/instructorCourses">My Courses Instructor</NavLink>
                </li>
            </ul>

        </div>
    );
};

export default InstructorMenu;