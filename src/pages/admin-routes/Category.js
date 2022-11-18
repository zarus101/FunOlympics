import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { loadAllCategories } from "../../service/Category_service";
import AddCategory from "./AddCategory";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";

const Category = () => {

    ///loadmin all the categories:
    const [categories, setCategories]= useState([])
    useEffect(
      ()=>{
        loadAllCategories().then((data)=>{
         
          setCategories(data)
  
  
        }).catch(error=>{
          console.log(error)
        })
  
      },
      []
    )
  return (
    <>
      <AdminNav/>
    <Container>
    <div className="Competition">
        <div className="competition-add flex-row">
            <AddCategory/>

        </div>
        

    </div>
   


    </Container>
    <br/>
    <AdminFooter/>
    </>
  );
};

export default Category;
