import { myAxios } from "../components/Helper"



// export const signUP=(user)=>{
//     return myAxios.post('/auth/register', user).then((response)=>response.data)
// }

//adding categories

export const addCategory=(category)=>{
    return myAxios.post(`/categories/`, category).then(response=>{ return response.data})
}

//loading categories
export const loadAllCategories=()=>{
    return myAxios.get(`/categories/`).then(response=>{return response.data})
   
}