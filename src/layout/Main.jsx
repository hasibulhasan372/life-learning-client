import { Outlet} from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const Main = () => {
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