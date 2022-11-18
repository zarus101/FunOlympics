import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'

function UserPost({post={title:"this is default title", content:"this is default content"}}) {
  return (
    <>
    <Container className='flex'>

    <Card className='bg-white shadow-sm flex'
  style={{
    width: '18rem'
  }}
>
  <CardBody className='bg-white'>
    <CardTitle tag="h5" className='bg-white'>
    {post.title}
    </CardTitle>
    {/* <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle> */}
  </CardBody >
  <img className='bg-white'
    alt=""
    src={post.imageName}
    width="100%"
  />
  <CardBody className='bg-white'>
    <CardText className='bg-white' dangerouslySetInnerHTML={{__html: post.content.substring(0,60)+ "....."}}>
      
    </CardText>
    <CardLink className='bg-white'>
      <Link className='btn btn-secondary rounded-0 mb-3 mx-3' to={'/user/posts/' + post.postId}>Read More</Link>
      
    </CardLink>
    
  </CardBody>
</Card>


    </Container>
   







    
    {/* <Card className='border-1 shadow mt-3'>
        <CardBody>
            <h1>{post.title}</h1>
            <CardText dangerouslySetInnerHTML={{__html: post.content.substring(0,60)+ "....."}}>
             
            </CardText>
        </CardBody>

        <div>
        <Link className='btn btn-secondary rounded-0 mb-3 mx-3' to={'/user/posts/' + post.postId}>Read More</Link>
        </div>

    </Card> */}
    </>
  )
}

export default UserPost