import { isLoggedIN } from "../auth/Index";
import {myAxios} from "./Helper"



export const signUP=(user)=>{
    return myAxios.post('/auth/register', user).then((response)=>response.data)
}

export const loginUser=(loginDetail)=>{
    return myAxios.post('/auth/login', loginDetail).then((response)=> response.data)

};

export const getToken=()=>{
    if(isLoggedIN()){
        return JSON.parse(localStorage.getItem("data")).token
    }else{
        return null;
    }
}