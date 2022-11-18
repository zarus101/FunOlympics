import { myAxios, privateAxios } from "../components/Helper"



//list all the users

export const getAllUsers=()=>{
    return myAxios.get(`/users/`).then(response=>{return response.data})
}

//delete users

export const deleteUserById=(id)=>{
    return myAxios.delete(`/users/${id}`).then(res=>res.data)
}


//change password

export const changePassword=(post,id)=>{
    return myAxios.post(`users/${id}/changePassword`, post).then(res=> res.data)

}