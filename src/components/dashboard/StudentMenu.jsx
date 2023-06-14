import { NavLink } from "react-router-dom";
import useSelectCourse from "../../hooks/useSelectCourse";
import useEnrolledCourses from "../../hooks/useEnrolledCourses";


const StudentMenu = () => {
    const [selectCourses] = useSelectCourse();
    const [enrolledCourses] = useEnrolledCourses()
    return (
        <div>
            <ul className="space-y-2">
                <li className="relative text-lg font-semibold">
                    <NavLink to="/dashboard/selectedCourses"
                        className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>
                        <img src="https://i.ibb.co/23YMdDY/download.jpg" alt="" className="w-4 h-4" />
                        Selected Courses {selectCourses.length > 0 && <small className="absolute -top-2 left-[158px]  text-sky-600 font-bold">+{selectCourses.length}</small>}
                    </NavLink></li>
                
                <li className="relative text-lg font-semibold">
                    <NavLink to="/dashboard/enrolledCourses"
                        className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}> <img src="https://i.ibb.co/Wyfn3L7/5013651.png" alt="" className="w-4 h-4" />
                        EnrolledCourses{enrolledCourses.length > 0 && <small className="absolute -top-2 left-[153px] text-sky-600 font-bold">+{enrolledCourses.length}</small>}</NavLink></li>

                <li className=" text-lg font-semibold">
                    <NavLink to="/dashboard/myPayment"
                        className={({ isActive }) => isActive ? "text-purple-500 flex items-center gap-2" : "flex items-center gap-2"}>
                        <img src="https://i.ibb.co/DtWhpj2/images-3.jpg" alt="" className="w-4 h-4" />
                        My Payment
                    </NavLink> </li>
            </ul>
        </div>
    );
};

export default StudentMenu;