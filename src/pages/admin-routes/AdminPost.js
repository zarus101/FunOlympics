import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText } from "reactstrap";
import { getCurrentUserDetail, isLoggedIN } from "../../auth/Index";

function AdminPost({
  post = { title: "this is default title", content: "this is default content" },
  deletePost,
}) {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setUser(getCurrentUserDetail());
    setLogin(isLoggedIN());
  }, []);

  return (
    <Card className="border-1 shadow mt-3 text-start">
     <CardBody>
            <h1>{post.title}</h1>
            <CardText dangerouslySetInnerHTML={{__html: post.content.substring(0,60)+ "....."}}>
             
            </CardText>
        </CardBody>

      <div className="pb-3">
        <Link
          className="btn btn-secondary rounded-0  mx-3"
          to={"/admin/posts/" + post.postId}
        >
          Read More
        </Link>

        {isLoggedIN &&
          (user && user.id === post.user.id ? (
            <Button
              color="danger"
              onClick={() => deletePost(post)}
              className="ms-2 rounded-0"
            >
              Delete
            </Button>
          ) : (
            ""
          ))}
       
      </div>
    </Card>
  );
}

export default AdminPost;
