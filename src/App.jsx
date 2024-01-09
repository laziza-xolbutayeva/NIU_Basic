import Home from '../src/pages/home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import All from './UI/All'
import AllReg from './UI/AllReg'
import Registration from './pages/Registration/registration'
import RegistrationSMS from './pages/Registration/registrationSMS'
import RegistrationInfo from './pages/Registration/registrationInfo'
import RegistrationPasInfo from './pages/Registration/registrationPasInfo'
import RegistrationPrevEdu from './pages/Registration/registrationPrevEdu'
import RegistrationDirection from './pages/Registration/registrationDirection'
import RegistrationExamDate from './pages/Registration/registrationExamDate'
import RegGeneralInfo from './pages/Registration/registrationGeneralInfo'
import RegDownload from './pages/Registration/registrationDownload'
import News from './pages/UniversityNews/news'
import NewsDetails from './pages/UniversityNews/newsDetails'
import Announcement from './pages/UniversityNews/announcement'
import AnnouncementDetails from './pages/UniversityNews/announcementDetails'
import Grand from './pages/UniversityNews/grand'
import GrandDetails from './pages/UniversityNews/grandDetails'
import PhotoGall from './pages/UniversityNews/photoGall'
import PhotoGallDetails from './pages/UniversityNews/photoGallDetails'
import VideoGallery from './pages/UniversityNews/videoGallery'
import VideoGalleryDetails from './pages/UniversityNews/videoGallerydetails'
import Documents from './pages/UniversityAbout/documents'
import UniverStory from './pages/UniversityAbout/story'
import Laws from './pages/UniversityAbout/Laws'
import Structure from './pages/UniversityAbout/Structure'
import Requisites from './pages/UniversityAbout/requisites'
import UniverContact from './pages/UniversityAbout/contact'
import WorkPlan from './pages/Documents/WorkPlan'
import Contracts from './pages/Documents/Contracts'
import DocLaws from './pages/Documents/Laws';
import Qualification from './pages/Documents/Qualification';
import Regulations from './pages/Documents/Regulations';
import Reports from './pages/Documents/Reports';
import ConstructionViceRector from './pages/Leaders/ConstructionViceRector';
import EconomicViceRector from './pages/Leaders/EconomicViceRector';
import FirstViceRector from './pages/Leaders/FirstViceRector';
import InnovationViceRector from './pages/Leaders/InnovationViceRector';
import InternationViceRector from './pages/Leaders/InternationViceRector';
import Rector from './pages/Leaders/Rector';
import ViceRector from './pages/Leaders/ViceRector';

import { Routes, Route } from 'react-router-dom'

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
            <Route path="/UniversityAbout/University" element={<Documents />} />
            <Route path="/UniversityAbout/History" element={<UniverStory />} />
            <Route path="/UniversityAbout/Laws" element={<Laws />} />
            <Route path="/UniversityAbout/Structure" element={<Structure />} />
            <Route path="/UniversityAbout/Requisites" element={<Requisites />} />
            <Route path="/UniversityAbout/Contact" element={<UniverContact />} />
            <Route path="/Documents/WorkPlan" element={<WorkPlan />} />
            <Route path="/Documents/Contracts" element={<Contracts />} />
            <Route path="/Documents/Laws" element={<DocLaws />} />
            <Route path="/Documents/Qualification" element={<Qualification />} />
            <Route path="/Documents/Regulations" element={<Regulations />} />
            <Route path="/Documents/Reports" element={<Reports />} />
            <Route path="/Leaders/ConstructionViceRector" element={<ConstructionViceRector />} />
            <Route path="/Leaders/FirstViceRector" element={<FirstViceRector />} />
            <Route path="/Leaders/EconomicViceRector" element={<EconomicViceRector />} />
            <Route path="/Leaders/InnovationViceRector" element={<InnovationViceRector />} />
            <Route path="/Leaders/InternationViceRector" element={<InternationViceRector />} />
            <Route path="/Leaders" element={<Rector />} />
            <Route path="/Leaders/ViceRector" element={<ViceRector />} />
          </Route>
          <Route path="/Registration" element={<AllReg />}>
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
          </Route>

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
  )
}

export default App
