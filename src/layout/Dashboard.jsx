import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";


const Dashboard = () => {
    return (
        <div className="flex w-full">
            <Sidebar></Sidebar>
            <div className="grow">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;