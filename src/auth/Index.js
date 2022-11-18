 
 export const isLoggedIN=()=>{
    let data= localStorage.getItem("data");
    if (data==null){
        return false
    }else{
        return true;
    }
 }
 
 export const doLogin=(data, next)=>{
    localStorage.setItem("data", JSON.stringify(data))
    next()
 }

 export const userList=(data)=>{
    localStorage.setItem("data", JSON.stringify(data))
 }


 export const doLogout=(next)=>{
    localStorage.removeItem("data")
    next()
 }


 //get current user

 export const getCurrentUserDetail=()=>{
    if(isLoggedIN){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return false
    }
 }

 