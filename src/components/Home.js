import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CategoryMenu from './CategoryMenu'
import MainNavbar from './Navbar'
import NewFeed from './NewFeed'
import VideoPage from './VideoPage'
import "./main.scss"
import Footer from './Footer'
import Contact from './Contact'


const Home = () => {

  return (
    <>
       <MainNavbar/>

       <VideoPage/>



       <Container className='container mt-5'>
        <Row>
          {/* <Col md={2} className="menu border">
          <CategoryMenu/> */}
          {/* </Col> */}
          <Col md={10}>
          <NewFeed/>
          </Col>
        </Row>

    




       
       </Container>
       <Contact/>


       <Footer/>
    
    </>
  )
 
}

export default Home