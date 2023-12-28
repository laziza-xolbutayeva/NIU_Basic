import axios from "axios"

const baseURL = "https://NIU";
const req = {
    getHome: () => axios(`${baseURL}/`),
    getRegistration: () => axios(`${baseURL}/Registration`),
    getRegistrationSMS: () => axios(`${baseURL}/Registration/SMS`),
    getRegistrationInfo: () => axios(`${baseURL}/Registration/Info`),
    getRegistrationPasInfo: () => axios(`${baseURL}/Registration/PassportInfo`),
    getRegistrationPrevEdu: () => axios(`${baseURL}/Registration/PreviousEducation`),
    getRegistrationDirection: () => axios(`${baseURL}/Registration/Direction`),
    getRegistrationExamDate: () => axios(`${baseURL}/Registration/ExamDate`),
    getRegistrationGeneralInfo: () => axios(`${baseURL}/Registration/GeneralInfo`),
    getRegistrationDownload: () => axios(`${baseURL}/Registration/Download`),
    getNews: () => axios(`${baseURL}/News`),
    getNewsDetails: () => axios(`${baseURL}/News/Details`),
    getAnnouncements: () => axios(`${baseURL}/Announsements`),
    getAnnouncementsDetails: () => axios(`${baseURL}/Announsements/Details`),
    getGrand: () => axios(`${baseURL}/Grand`),
    getGrandDetails: () => axios(`${baseURL}/Grand/Details`),
    getGallery: () => axios(`${baseURL}/Gallery`),
    getGalleryDetails: () => axios(`${baseURL}/Gallery/Details`),
    getVideoGallery: () => axios(`${baseURL}/VideoGallery`),
    getVideoGalleryDetails: () => axios(`${baseURL}/VideoGallery/Details`),
}
export default req;