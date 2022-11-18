import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Table } from "reactstrap";
import { deleteContactById, getAllContacts } from "../../service/Contact_Service";
import { deleteUserById, getAllUsers } from "../../service/User_service";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getAllContacts()
      .then((data) => {
        setContacts(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });



  }, []);

  
  function deleteContact(contact){
    //going to delete post
      
    deleteContactById(contact.id).then(res=>{

      console.log(res)
      getAllContacts()
      .then((data) => {
        setContacts(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
      
      
      toast.success("contact deleted!!")
      
      
  }).catch(error=>{
      toast.error("failed to delete the contact..")
  })
  
  
  }

  
     



  return (
    <>
      <AdminNav />
      <br/>

      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
             
              <th>email</th>
              <th>message</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {/* {
            categories.map((category)=>{
                return(
                    <>
                    <div className="categories w-50" key={category.categoryId}>
                        <p>{category.categoryTitle}</p>

                    </div>
                    </>
                )
            })
           } */}

           {contacts.map((contact,index)=>{
            return(
                <>
                <tr key={index} >
              <th scope="row">{contact.id}</th>
              <td>{contact.email}</td>
              <td>{contact.content}</td>
              <td>
               
                <Button color="danger" onClick={()=>deleteContact(contact)} className="mx-2">
                  Delete
                </Button>
              </td>
            </tr>

                </>
            )
           })}
            
          </tbody>
        </Table>
      </Container>
      <br/>
      <AdminFooter/>
    </>
  );
};

export default ContactList;
