import Navbar from "./Registration-Navbar/index";
import { Outlet } from "react-router-dom";

function index() {
    return (
      <>
      <Navbar/>
      <Outlet/>
      </>
  );
}

export default index;