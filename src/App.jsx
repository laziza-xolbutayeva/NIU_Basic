import Home from "../src/pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Registration from "./pages/registration";
import RegistrationSMS from "./pages/registrationSMS";
import RegistrationInfo from "./pages/registrationInfo";
import RegistrationPasInfo from "./pages/registrationPasInfo";
import RegistrationPrevEdu from "./pages/registrationPrevEdu";
import RegistrationDirection from "./pages/registrationDirection";
import RegistrationExamDate from "./pages/registrationExamDate";
import RegGeneralInfo from "./pages/registrationGeneralInfo";
import RegDownload from "./pages/registrationDownload"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Registration/SMS" element={<RegistrationSMS />} />
          <Route path="/Registration/Info" element={<RegistrationInfo />} />
          <Route path="/Registration/PassportInfo" element={<RegistrationPasInfo />} />
          <Route path="/Registration/PreviousEducation" element={<RegistrationPrevEdu />} />
          <Route path="/Registration/Direction" element={<RegistrationDirection />} />
          <Route path="/Registration/ExamDate" element={<RegistrationExamDate />} />
          <Route path="/Registration/GeneralInfo" element={<RegGeneralInfo />} />
          <Route path="/Registration/Download" element={<RegDownload />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
