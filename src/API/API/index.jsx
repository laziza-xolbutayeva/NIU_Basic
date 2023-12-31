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
    getAnnouncements:async () => {
        const response = await axios.get(`${baseURL}/news/?d=announcement`);
        if (response.status === 200) {
            return response.data;
        }
    },
    getGrand:async () => {
        const response = await axios.get(`${baseURL}/news/?d=scholarship`);
        if (response.status === 200) {
            return response.data;
        }
    } ,
    getGallery: async () => {
        const response = await axios.get(`${baseURL}/news/?d=foto`);
        if (response.status === 200) {
            return response.data;
        }
    } ,
    getVideoGallery: async () => {
        const response = await axios.get(`${baseURL}/news/?d=video`);
        if (response.status === 200) {
            return response.data;
        }
    } , 
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
    getRector:async (slug) => {
        const response = await axios.get(`${baseURL}/structure/leadership/${slug}/`);
        if (response.status === 200) {
            return response.data;
        }
    },
    getViceRector: () => axios(`${baseURL}/Leaders/ViceRector`),
}
export {req, baseURL}