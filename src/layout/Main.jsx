import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useEffect } from "react";


const Main = () => {
  const {pathname} = useLocation()
  useEffect(()=>{
    window.scrollTo({top:0, behavior:"smooth"})
  },[pathname])
    return (
        <>
        <Navbar></Navbar>
          <div className="outlet-screen">
          <Outlet></Outlet>  
          </div>
          <Footer></Footer>
        </>
    );
};

export default Main;