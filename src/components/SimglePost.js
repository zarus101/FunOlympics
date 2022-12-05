
import { Card, CardBody, CardText, Col, Container, Row } from "reactstrap"
import { Link, useParams } from "react-router-dom"
import MainNavbar from "./Navbar"
import { useEffect } from "react"
import { loadPost } from "../service/Post_Competition_Service"
import { useState } from "react"
import { toast } from "react-toastify"
import Footer from "./Footer"


const SinglePost=()=>{

    const {postId}=useParams()
    const [post, setPost]= useState(null)

    useEffect(() => {

        loadPost(postId).then(data=>{
            console.log(data)
            setPost(data)
        }).catch((error=>{
            toast.error("Error in loading post")
        }))

     
    
    }, [])


    const printDate=(numbers)=>{
        return new Date(numbers).toLocaleString()

    }
    
    return (
        <>
        <MainNavbar/>
      

        <Container className="mt-4">
            <Link to="/">Home</Link> / {post && (<Link to="#"> {post.title} </Link>)}

            <Row>
                <Col md={{size:12}}>

                    <Card className="mt-3">
                        

                        {
                            (post) &&(
                                <CardBody>
                            <CardText>Posted by <b>{post.user.name}</b> on <b>{printDate(post.addedDate)}</b></CardText>

                            {/* <CardText>
                                <span className="text-muted">{post.category.categoryTitle}</span>

                            </CardText>

                            <CardText className="mt-3">
                                <h3>{post.title}</h3>
                            </CardText> */}
                         

                            <CardText className="mt-5" dangerouslySetInnerHTML={{__html:post.content}}>

                            </CardText>
                        </CardBody>
                            )
                        }
                    </Card>


                </Col>
            </Row>
        </Container>
        <br/>
        <Footer/>
        

        </>

    )
}
export default SinglePost