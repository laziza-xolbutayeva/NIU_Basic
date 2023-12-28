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
import RegDownload from "./pages/registrationDownload";
import News from "./pages/UniversityNews/news";
import NewsDetails from "./pages/UniversityNews/newsDetails";
import Announcement from "./pages/UniversityNews/announcement";
import AnnouncementDetails from "./pages/UniversityNews/announcementDetails";
import Grand from "./pages/UniversityNews/grand";
import GrandDetails from "./pages/UniversityNews/grandDetails";
import PhotoGall from "./pages/UniversityNews/photoGall";
import PhotoGallDetails from "./pages/UniversityNews/photoGallDetails";
import VideoGallery from "./pages/UniversityNews/videoGallery";
import VideoGalleryDetails from "./pages/UniversityNews/videoGallerydetails";

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
          <Route path="/News" element={<News />} />
          <Route path="/News/Details" element={<NewsDetails />} />
          <Route path="/Announcements" element={<Announcement />} />
          <Route path="/Announcements/Details" element={<AnnouncementDetails />} />
          <Route path="/Grand" element={<Grand />} />
          <Route path="/Grand/Details" element={<GrandDetails />} />
          <Route path="/Gallery" element={<PhotoGall />} />
          <Route path="/Gallery/Details" element={<PhotoGallDetails />} />
          <Route path="/VideoGallery" element={<VideoGallery />} />
          <Route path="/VideoGallery/Details" element={<VideoGalleryDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
