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
import { loadAllPosts } from "../../service/Post_Competition_Service";
import "./user.scss"
import UserFooter from "./UserFooter";

import UserNav from "./UserNav";
import UserPost from "./UserPost";

const UserDashboard = () => {
  const [login, setLogin] = useState(false);
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: "",
    totalElements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });

  const [user, setUser] = useState(false);

  useEffect(() => {
    setLogin(isLoggedIN());
    getCurrentUserDetail();
    console.log(getCurrentUserDetail());
    changepage(0);
  }, [login]);

  // useEffect(() => {

  //   }, )

  const changepage = (pageNumber = 0, pageSize = 5) => {
    if (pageNumber > postContent.pageNumber && postContent.lastPage) {
      return;
    }
    if (pageNumber < postContent.pageNumber && postContent.pageNumber === 0) {
      return;
    }

    loadAllPosts(pageNumber, pageSize)
      .then((data) => {
        setPostContent(data);
        console.log(data)
        window.scroll(0, 0);
      })
      .catch((error) => {
        toast.error("error in loading posts");
      });
  };

  return (
    <>
      <UserNav />
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

      <div className="container-fluid">
        <Row>
          <Col>
            <h1>Competition Count ({postContent?.totalElements})</h1>

            {postContent.content?.map((post) => (
              <UserPost post={post} key={post.postid} />
            ))}

            <Container className="mt-3">
              <Pagination size="lg">
                <PaginationItem
                  onChange={() => changepage(--postContent.pageNumber)}
                  disabled={postContent.pageNumber === 0}
                >
                  <PaginationLink previous>previous</PaginationLink>
                </PaginationItem>

                {[...Array(postContent.totalPages)].map((item, index) => (
                  <PaginationItem
                    onClick={() => changepage(index)}
                    active={index === postContent.pageNumber}
                    key={index}
                  >
                    <PaginationLink>{(index = 1)}</PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem
                  onClick={() => changepage(++postContent.pageNumber)}
                  disabled={postContent.lastPage}
                >
                  <PaginationLink next>next</PaginationLink>
                </PaginationItem>
              </Pagination>
            </Container>
          </Col>
        </Row>
      </div>


      <UserFooter/>
    </>
  );
};

export default UserDashboard;
