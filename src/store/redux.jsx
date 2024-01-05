import { createStore } from "redux";

const counterReducer=(state={counter:0}, action)=>{
    if(action.type==="newDataChange"){
        return {
            counter:action.newData,
        };
    }
    if(action.type==="AnnounDataChange"){
        return {
            counter:action.DataAnnoun,
        };
    }
    return state;
}

const store=createStore(counterReducer);
export default store;