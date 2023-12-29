import Home from "../src/pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import All from "./UI/All";
import Registration from "./pages/Registration/registration";
import RegistrationSMS from "./pages/Registration/registrationSMS";
import RegistrationInfo from "./pages/Registration/registrationInfo";
import RegistrationPasInfo from "./pages/Registration/registrationPasInfo";
import RegistrationPrevEdu from "./pages/Registration/registrationPrevEdu";
import RegistrationDirection from "./pages/Registration/registrationDirection";
import RegistrationExamDate from "./pages/Registration/registrationExamDate";
import RegGeneralInfo from "./pages/Registration/registrationGeneralInfo";
import RegDownload from "./pages/Registration/registrationDownload";
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
import Documents from "./pages/UniversityAbout/documents";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<All />}>
            <Route path="/" index element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/News/Details" element={<NewsDetails />} />
            <Route path="/Announcements" element={<Announcement />} />
            <Route
              path="/Announcements/Details"
              element={<AnnouncementDetails />}
            />
            <Route path="/Grand" element={<Grand />} />
            <Route path="/Grand/Details" element={<GrandDetails />} />
            <Route path="/Gallery" element={<PhotoGall />} />
            <Route path="/Gallery/Details" element={<PhotoGallDetails />} />
            <Route path="/VideoGallery" element={<VideoGallery />} />
            <Route
              path="/VideoGallery/Details"
              element={<VideoGalleryDetails />}
            />
          </Route>
          <Route path="/Registration" element={}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Registration/SMS" element={<RegistrationSMS />} />
          <Route path="/Registration/Info" element={<RegistrationInfo />} />
          <Route
            path="/Registration/PassportInfo"
            element={<RegistrationPasInfo />}
          />
          <Route
            path="/Registration/PreviousEducation"
            element={<RegistrationPrevEdu />}
          />
          <Route
            path="/Registration/Direction"
            element={<RegistrationDirection />}
          />
          <Route
            path="/Registration/ExamDate"
            element={<RegistrationExamDate />}
          />
          <Route
            path="/Registration/GeneralInfo"
            element={<RegGeneralInfo />}
          />
          <Route path="/Registration/Download" element={<RegDownload />} />
          {/* <Route path="/News" element={<News />} />
          <Route path="/News/Details" element={<NewsDetails />} />
          <Route path="/Announcements" element={<Announcement />} />
          <Route path="/Announcements/Details" element={<AnnouncementDetails />} />
          <Route path="/Grand" element={<Grand />} />
          <Route path="/Grand/Details" element={<GrandDetails />} />
          <Route path="/Gallery" element={<PhotoGall />} />
          <Route path="/Gallery/Details" element={<PhotoGallDetails />} />
          <Route path="/VideoGallery" element={<VideoGallery />} />
          <Route path="/VideoGallery/Details" element={<VideoGalleryDetails />} />
          <Route path="/UniversityAbout/Documents" element={<Documents />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
