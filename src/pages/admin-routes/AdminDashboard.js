import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  UncontrolledCarousel,
} from "reactstrap";
import { getCurrentUserDetail, isLoggedIN } from "../../auth/Index";
import { deletePostService, loadAllPosts } from "../../service/Post_Competition_Service";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";
import AdminPost from "./AdminPost";

const AdminDashboard = () => {
  const [login, setLogin] = useState(true);
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [user, setUser] = useState({});

  useEffect(() => {
    setLogin(isLoggedIN());
    setUser(getCurrentUserDetail());
    loadAllPosts().then(data=>{
      setPostContent(data)
      console.log(data)
      window.scroll(0,0)
  }).catch(error=>{
      toast.error("error in loading posts")
  })
  }, [login]);
  

function deletePost(post){
  //going to delete post
    
  deletePostService(post.postId).then(res=>{
    console.log(res)
    toast.success("post deleted!!")
    loadAllPosts().then(data=>{
      setPostContent(data)
      console.log(data)
      window.scroll(0,0)
  }).catch(error=>{
      toast.error("error in loading posts")
  })
}).catch(error=>{
    toast.error("failed to delete the post..")
})


}


  return (
    <>
      <AdminNav />
      <UncontrolledCarousel className="h-100"
        items={[
          {
            altText: "watch many games",
            caption: "live streaming",
            key: 1,
            src: "../image/image1.jpg",
           
          },
          {
            altText: "point your view",
            caption: "live comments",
            key: 2,
            src: "../image/image-6.webp",
          },
          {
            altText: "",
            caption: "",
            key: 3,
            src: "../image/image-7.webp",
          },
        ]}
      /> 

      <br/>

      <div className="container-fluid">
        <Row>
          <Col>
            <h1>Competition Count ({postContent?.totalElements})</h1>

            {postContent.content?.map((post) => (
              <AdminPost post={post} key={post.postid}  deletePost={deletePost} />
            ))}
           
          </Col>
        </Row>
      </div>
      <br/>

      <AdminFooter/>
    </>
  );
};

export default AdminDashboard;
