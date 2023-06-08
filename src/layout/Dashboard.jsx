import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";


const Dashboard = () => {
    return (
        <>
        <Sidebar></Sidebar>
         <Outlet></Outlet>   
        </>
    );
};

export default Dashboard;