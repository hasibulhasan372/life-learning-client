import { NavLink } from "react-router-dom";
import useSelectCourse from "../../hooks/useSelectCourse";
import useEnrolledCourses from "../../hooks/useEnrolledCourses";


const StudentMenu = () => {
    const [selectCourses] = useSelectCourse();
    const [enrolledCourses] = useEnrolledCourses()
    return (
        <div>
            <ul className="space-y-2">
                <li className="relative text-lg font-semibold"><NavLink to="/dashboard/selectedCourses">Selected Courses {selectCourses.length > 0 && <small className="absolute -top-1 text-sky-600 font-bold">+{selectCourses.length}</small>}</NavLink></li>

                <li className="relative text-lg font-semibold"><NavLink to="/dashboard/enrolledCourses">EnrolledCourses{enrolledCourses.length > 0 && <small className="absolute -top-1 text-sky-600 font-bold">+{enrolledCourses.length}</small>}</NavLink></li>
                
                <li className=" text-lg font-semibold"><NavLink to="/dashboard/myPayment">My Payment</NavLink></li>
            </ul>
        </div>
    );
};

export default StudentMenu;