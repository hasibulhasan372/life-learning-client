import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const AdminMenu = () => {
    return (
        <div className=" text-center">
            <ul>
                <li className="md:text-lg font-medium md:font-semibold "><Link to="/dashboard/allUsers" className="gap-2">All Users <FaArrowRight className="inline-block text-base text-slate-400"></FaArrowRight> </Link></li>
                <li><Link to="/dashboard/allCourses">All Course</Link></li>
            </ul>
        </div>
    );
};

export default AdminMenu;