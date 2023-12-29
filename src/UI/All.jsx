import Navbar from "./Navbar/index";
import Footer from "./Footer/index";
import { Outlet } from "react-router-dom";

function index() {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
  );
}

export default index;