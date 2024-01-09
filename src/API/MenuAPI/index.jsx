import axios from "axios";


const baseURL = "http://niu.hrmanager.uz";
const menuReq = {
    getStructureLeadership: () => axios(`${baseURL}/structure/leadership/`),
    getBanner: () => axios(`${baseURL}/banner/`),
}
export {menuReq, baseURL}