import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";

import { useEffect } from "react";

import { useState } from "react";
import { toast } from "react-toastify";
import UserNav from "./UserNav";
import { getCurrentUserDetail, isLoggedIN } from "../../auth/Index";
import {
  createComment,
  loadPost,
} from "../../service/Post_Competition_Service";
import UserFooter from "./UserFooter";

const PostPage2 = () => {
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState({
    conent: "",
  });

  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setLogin(isLoggedIN());
    setUser(getCurrentUserDetail());
  }, [login]);

  useEffect(() => {
    loadPost(postId)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        toast.error("Error in loading post");
      });
  }, []);

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleString();
  };

  const submitPost = () => {
    if (!isLoggedIN()) {
      toast.error("Need to login first !!");
      return;
    }

    if (comment.content.trim() === "") {
        toast.error("Commant cannot be empty")
      return;
    }
    createComment(comment, post.postId)
      .then((data) => {
        console.log(data);
        toast.success("comment added ..");
        setPost({
          ...post,
          comments: [...post.comments, data.data],
        });
        setComment({
          content: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <UserNav />
      <Container className="mt-4">
        <Link to="/user/dashboard">Home</Link> /{" "}
        {post && <Link to="#"> {post.title} </Link>}
        <Row>
          <Col md={{ size: 12 }}>
            <Card className="mt-3">
              {post && (
                <CardBody>
                  <CardText>
                    Posted by <b>{post.user.name}</b> on{" "}
                    <b>{printDate(post.addedDate)}</b>
                  </CardText>

                  <CardText>
                    <span className="text-muted">
                      {post.category.categoryTitle}
                    </span>
                  </CardText>

                  <CardText className="mt-3">
                    <h3>{post.title}</h3>
                  </CardText>

                  <CardText
                    className="mt-5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></CardText>
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="my-4">
          <Col
            md={{
              size: 9,
              offset: 1,
            }}
          >
            <h3>Comments ( {post ? post.comments.length : 0} )</h3>

            {post &&
              post.comments.map((c, index) => (
                <Card
                  className="mt-4 border-1 shadow-sm text-start"
                  key={index}
                >
                  <CardBody>
                    <CardText>{c.content}</CardText>
                  </CardBody>
                </Card>
              ))}

            <Card className="mt-4 border-0">
              <CardBody>
                <Input
                  type="textarea"
                  placeholder="Enter comment here"
                  value={comment.content}
                  onChange={(event) =>
                    setComment({ content: event.target.value })
                  }
                />

                <Button onClick={submitPost} className="mt-2" color="primary">
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <UserFooter/>
    </>
  );
};
export default PostPage2;
