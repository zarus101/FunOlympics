import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Col, Row, Pagination, PaginationItem, PaginationLink, Container } from 'reactstrap'
import { loadAllPosts } from '../service/Post_Competition_Service'
import Post from './Post'

const NewFeed = () => {

    const [postContent, setPostContent]=useState({
        content:[],
        totalPages:'',
        totalElements:'',
        pageSize:"",
        lastPage:false,
        pageNumber:""

    })
    

    useEffect(() => {
       changepage(0)
      }, [])

    
    const changepage=(pageNumber=0, pageSize=5)=>{
        if(pageNumber > postContent.pageNumber && postContent.lastPage){
             
                return
        }
        if(pageNumber <postContent.pageNumber && postContent.pageNumber===0){
            return
        }
      
        loadAllPosts(pageNumber, pageSize).then(data=>{
            setPostContent(data)
            console.log(data)
            window.scroll(0,0)
        }).catch(error=>{
            toast.error("error in loading posts")
        })
    }

    


  return (
    <div className="container-fluid mb-5">
        <h1>No. of Competitions: ({postContent?.totalElements})</h1>
     
            <Col md={{size:15}}>

                

                {
                    postContent.content?.map((post)=>(
                        <Post post={post} key={post.postId}/>

                    ))
                        
                    
                }

               {/* <Container className='mt-3'>
               <Pagination size='lg'>
                    <PaginationItem onChange={()=> changepage(--postContent.pageNumber)} disabled={postContent.pageNumber===0}>
                        <PaginationLink previous>
                        previous
                        </PaginationLink>
                    </PaginationItem>
                    

                    {
                        [...Array(postContent.totalPages)].map((item, index)=>(

                            <PaginationItem onClick={()=>changepage(index)} active={index===postContent.pageNumber} key={index}>
                                <PaginationLink >
                                    {index=1}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    }


                    <PaginationItem onClick={()=> changepage(++postContent.pageNumber)} disabled={postContent.lastPage} >
                        <PaginationLink  next>
                        next
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>

               </Container>*/}
                

            </Col> 
       
    </div>

  )
}

export default NewFeed