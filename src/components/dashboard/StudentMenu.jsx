import { NavLink } from "react-router-dom";
import useSelectCourse from "../../hooks/useSelectCourse";
import useEnrolledCourses from "../../hooks/useEnrolledCourses";


const StudentMenu = () => {
    const [selectCourses] = useSelectCourse();
    const [enrolledCourses] = useEnrolledCourses()
    return (
        <div>
            <ul className="space-y-2">
                <li className="relative text-lg font-semibold"><NavLink to="/dashboard/selectedCourses" 
                className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>Selected Courses {selectCourses.length > 0 && <small className="absolute -top-2 left-[138px]  text-sky-600 font-bold">+{selectCourses.length}</small>}</NavLink></li>

                <li className="relative text-lg font-semibold"><NavLink to="/dashboard/enrolledCourses" 
                className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>EnrolledCourses{enrolledCourses.length > 0 && <small className="absolute -top-2 left-[130px] text-sky-600 font-bold">+{enrolledCourses.length}</small>}</NavLink></li>
                
                <li className=" text-lg font-semibold"><NavLink to="/dashboard/myPayment" 
                className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>My Payment</NavLink></li>
            </ul>
        </div>
    );
};

export default StudentMenu;