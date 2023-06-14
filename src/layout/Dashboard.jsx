import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
    const {user} = useAuth();
    
    return (
        <div className="flex w-full">
            
            <Sidebar></Sidebar>
            <div className="grow">
                {user ? <h1 className="text-7xl lg:pl-32 lg:mt-10">Welcome! <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">{user?.displayName}</span></h1> : ""}
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;