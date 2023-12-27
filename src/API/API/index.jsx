import axios from "axios"

const baseURL = "https://NIU";
const req = {
    getHome: () => axios(`${baseURL}/`),
    getRegistration: () => axios(`${baseURL}/Registration`),
    getRegistrationSMS: () => axios(`${baseURL}/Registration/SMS`),
    getRegistrationInfo: () => axios(`${baseURL}/Registration/Info`),
}
export default req;