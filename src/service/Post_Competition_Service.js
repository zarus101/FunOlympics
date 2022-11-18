import { myAxios, privateAxios } from "../components/Helper"



//create competition function
export const docreateCompetition=(competitionData)=>{
    console.log(competitionData)
    return privateAxios.post(`/user/${competitionData.userId}/category/${competitionData.categoryId}/posts`, competitionData).then(response=>response.data)
};


//get all the competition posts:
export const loadAllPosts=()=>{
    return myAxios.get(`/posts/`).then(response=> response.data)
}

//load single post of given id

export const loadPost=(postId)=>{
    return myAxios.get("/posts/" + postId).then ((response)=> response.data)

}

//upload post banner image

export const uploadPostImage = (image, postId) => {
    let formData = new FormData();
    formData.append("image", image);
    return privateAxios
      .post(`/post/image/upload/${postId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  };


//create comment
export const createComment = (comment, postId) => {
    return privateAxios.post(`/post/${postId}/comments`, comment);
  };


  export function loadPostUserWise(userId){
    return privateAxios.get(`/user/${userId}/posts`).then((response)=>response.data)
  }


  //delete post

  export function deletePostService(postId){

    return myAxios.delete(`/posts/${postId}`).then(res=>res.data)
  }