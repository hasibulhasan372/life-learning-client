import {MdLogout} from "react-icons/md"
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const {user} = useAuth();
    return (
        <div className=" w-24 sm:w-32 md:w-48 lg:w-56 border h-screen bg-sky-100">
            <div className="py-3 sm:py-4 md:py-6 md:px-2 flex flex-col justify-between h-full">
               <div className="space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-10 ">
               <div className="text-center">
                    <Link to="/" ><img src={user?.photoURL} alt="user" className=" w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 rounded-full mx-auto "/></Link>
                    <Link to="/" className="text-lg text-green-600">{user?.email}</Link>
                </div>
                <div>Content</div>
               </div>
                <div>
                    <button className="text-lg md:text-xl font-semibold flex items-center gap-1"><MdLogout></MdLogout>Log Out</button>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;