import React from 'react'
import { Link } from 'react-router-dom'
import {  Card, CardBody, CardText } from 'reactstrap'

function Post({post={title:"this is default title", content:"this is default content"}}) {
  return (
    
    <Card className='border-1 shadow mt-3 text-start'>
        <CardBody>
            <h1>{post.title}</h1>
            <CardText dangerouslySetInnerHTML={{__html: post.content.substring(0,60)+ "....."}}>
             
            </CardText>
        </CardBody>

        <div>
            <Link className='btn btn-secondary rounded-0 mb-3 mx-3' to={'/posts/' + post.postId}>Read More</Link>
        </div>

    </Card>
  )
}

export default Post