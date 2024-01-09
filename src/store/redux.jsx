import { createStore } from "redux";

const initalState={newData:0,announData:0,grandData:0,galleryData:0,videoData:0,menuData:0}

const Reducer=(state=initalState, action)=>{
    if(action.type==="newDataChange"){
        return {
            newData:action.newData,
        };
    }
    if(action.type==="AnnounDataChange"){
        return {
            announData:action.newData,
        };
    }
    if(action.type==="GrandDataChange"){
        return {
            grandData:action.newData,
        };
    }
    if(action.type==="GalleryDataChange"){
        return {
            galleryData:action.newData,
        };
    }
    if(action.type==="VideoDataChange"){
        return {
            videoData:action.newData,
        };
    }if(action.type==="menuDataSend"){
        return {
            menuData:action.newData,
        };
    }
    return state;
}

const storeNew=createStore(Reducer);
export default storeNew;