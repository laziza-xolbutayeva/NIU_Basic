import axios from "axios";


const baseURL = "http://niu.hrmanager.uz";
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
    getNews: async () => {
        const response = await axios.get(`${baseURL}/news/?d=news`);
        if (response.status === 200) {
            return response.data;
        }
    },
    getNewsDetails: () => axios(`${baseURL}/News/Details`),
    getAnnouncements: () => axios(`${baseURL}/Announsements`),
    getAnnouncementsDetails: () => axios(`${baseURL}/Announsements/Details`),
    getGrand: () => axios(`${baseURL}/Grand`),
    getGrandDetails: () => axios(`${baseURL}/Grand/Details`),
    getGallery: () => axios(`${baseURL}/Gallery`),
    getGalleryDetails: () => axios(`${baseURL}/Gallery/Details`),
    getVideoGallery: () => axios(`${baseURL}/VideoGallery`),
    getVideoGalleryDetails: () => axios(`${baseURL}/VideoGallery/Details`),
    getDocuments: () => axios(`${baseURL}/UniversityAbout/University`),
    getUniverStory: () => axios(`${baseURL}/UniversityAbout/History`),
    getUniverLaws: () => axios(`${baseURL}/UniversityAbout/Laws`),
    getUniverStructure: () => axios(`${baseURL}/UniversityAbout/Structure`),
    getUniverRequisites: () => axios(`${baseURL}/UniversityAbout/Requisites`),
    getDocumentPlan: () => axios(`${baseURL}/Documents/WorkPlan`),
    getDocumentContracts: () => axios(`${baseURL}/Documents/Contracts`),
    getDocumentLaws: () => axios(`${baseURL}/Documents/Laws`),
    getDocumentQualification: () => axios(`${baseURL}/Documents/Qualification`),
    getDocumentRegulations: () => axios(`${baseURL}/Documents/Regulations`),
    getDocumentReports: () => axios(`${baseURL}/Documents/Reports`),
    getConstructionViceRector: () => axios(`${baseURL}/Leaders/ConstructionViceRector`),
    getEconomicViceRector: () => axios(`${baseURL}/Leaders/EconomicViceRector`),
    getFirstViceRector: () => axios(`${baseURL}/Leaders/FirstViceRector`),
    getInnovationViceRector: () => axios(`${baseURL}/Leaders/InnovationViceRector`),
    getInternationalViceRector: () => axios(`${baseURL}/Leaders/InternationalViceRector`),
    getRector:async () => {
        const response = await axios.get(`${baseURL}/structure/leadership/u_rektor/`);
        if (response.status === 200) {
            return response.data;
        }
    },
    getViceRector: () => axios(`${baseURL}/Leaders/ViceRector`),
}
export {req, baseURL}