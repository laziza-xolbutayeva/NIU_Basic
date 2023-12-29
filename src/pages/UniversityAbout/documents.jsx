import Navbar from "../../UI/Navbar/index";
import Documents from "../../components/UniversityAbout/Documents/index";
import Footer from "../../UI/Footer/index";
import { Routes, Route } from "react-router-dom";

function home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/UniversityAbout/Documents" element={<Documents />} />
      </Routes>
      <Footer />
    </>
  );
}

export default home;
