import { myAxios } from "../components/Helper"

//create contact function
export const createContact=(contact)=>{
    return myAxios.post('/contact/', contact).then((response)=>response.data)
}

export const getAllContacts=()=>{
    return myAxios.get(`/contact/`).then(response=>{return response.data})
}

//delete users

export const deleteContactById=(id)=>{
    return myAxios.delete(`/contact/${id}`).then(res=>res.data)
}
