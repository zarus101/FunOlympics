import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";
import { getCurrentUserDetail } from "../../auth/Index";
import {
  deletePostService,
  loadPostUserWise,
} from "../../service/Post_Competition_Service";
import AddCompetition from "./AddCompetition";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";
import AdminPost from "./AdminPost";

const Competition = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setUser(getCurrentUserDetail());
    console.log(getCurrentUserDetail());
    loadPostUserWise(getCurrentUserDetail().id)
      .then((data) => {
        console.log(data);
        setPosts([...data]);
      })
      .catch((error) => {
        toast.error("error loading posts");
      });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  //function to delete posts:

  function deletePost(post) {
    //going to delete post

    deletePostService(post.postId)
      .then((res) => {
        console.log(res);

        refreshPage(true);
        toast.success("post deleted!!");
      })
      .catch((error) => {
        toast.error("failed to delete the post..");
      });
  }

  return (
    <>
      <AdminNav />
      <br/>
      <Container>
        <div className="Competition">
          <div className="competition-add flex-row">
            <AddCompetition />
          </div>
          <div className="competition-view">
            <h1 className="my-3">Posts Count: ({posts.length})</h1>

            {posts.map((post, index) => {
              return (
                <AdminPost post={post} key={index} deletePost={deletePost} />
              );
            })}
          </div>
        </div>
      </Container>
      <br/>
      <AdminFooter/>
    </>
  );
};

export default Competition;
