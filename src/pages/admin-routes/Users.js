import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Table } from "reactstrap";
import { deleteUserById, getAllUsers } from "../../service/User_service";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";

const Users = () => {
  const [users, setUsers] = useState([]);

  const navigate= useNavigate("")
  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });



  }, []);

  const editUser=(e,id)=>{
    e.preventDefault();
    navigate(`/admin/updateuser/${id}`);
};
     
function deleteUser(user){
    //going to delete post
      
    deleteUserById(user.id).then(res=>{

      console.log(res)
      
      
      toast.success("user deleted!!")
      
      
  }).catch(error=>{
      toast.error("failed to delete the user..")
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
              <th>name</th>
              <th>email</th>
              <th>gender</th>
              <th>country</th>
              <th>password</th>
              <th>Role</th>
              <th className="px-10">Action</th>
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

           {users.map((user,index)=>{
            return(
                <>
                <tr key={index} >
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>{user.password}</td>
              <td>{user.roles[0].name}</td>

              <td className="p-20">
                <Button  onClick={(e, id)=> editUser(e, user.id)} color="primary">Edit</Button>
                <Button color="danger" onClick={()=>deleteUser(user)} className="mx-2">
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

export default Users;
