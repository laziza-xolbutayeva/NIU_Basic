import Home from "../src/pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Registration from "./pages/registration";
import RegistrationSMS from "./pages/registrationSMS";
import RegistrationInfo from "./pages/registrationInfo";

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
        </Routes>
      </main>
    </>
  );
}

export default App;
