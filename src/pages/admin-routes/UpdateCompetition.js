// import JoditEditor from "jodit-react";
// import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   Button,
//   Card,
//   CardBody,
//   Container,
//   Form,
//   Input,
//   Label,
//   Table,
// } from "reactstrap";
// import { loadAllCategories } from "../../service/Category_service";
// import { loadPost } from "../../service/Post_Competition_Service";
// import AdminNav from "./AdminNav";

// const UpdateCompetition = () => {
//   const editor = useRef(null);
//   const { competitionId } = useParams();
//   const [post, setPost]= useState([])
//   const [categories, setCategories] = useState([]);


//   // const object= useContext(userContext)

//   useEffect(() => {
//     loadAllCategories()
//       .then((data) => {
//         setCategories(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     //load the competition from the database
//     loadPost(competitionId)
//       .then((data) => {
//         setPost({ ...data });
//       })
//       .catch((error) => {
//         console.log("error");
//         toast.error("error in loading post");
//       });
//   }, [post]);

//   const updateHtml = () => {
//     return (
//         <div className="wrapper">
//         <Card className="shadow-sm">
//           <CardBody>
        
//             <h3> add competition</h3>

//             <Form onSubmit={''}>
//               <div className="my-3">
//                 <Label for="title">Title</Label>
//                 <Input
//                   type="text"
//                   id="title"
//                   className="rounded-0"
//                   name="title"
//                   placeholder="enter competition title"
//                   onChange={''}
//                 />
//               </div>

//               <div className="my-3">
//                             <Label for="content" >Post Content</Label>
//                             {/* <Input
//                                 type="textarea"
//                                 id="content"
//                                 placeholder="Enter here"
//                                 className="rounded-0"
//                                 style={{ height: '300px' }}
//                             // /> */}

//                             <JoditEditor
//                                 ref={editor}
                                
//                                 onChange={''}
//                             />
//                         </div>

//                         <div className="mt-3">
//                             <Label for="image">Select Post banner</Label>
//                             <Input id="image" type="file" onChange={''} />
//                         </div>

         
//               <div className="my-3">
//                 <Label for="category">category</Label>
//                 <Input
//                   type="select"
//                   id="categoryId"
//                   placeholder="enter category"
//                   name="categoryId"
//                   onChange={''}
//                   defaultValue={0}
//                 >
//                   <option disabled value={0}>
//                     ---Select Category---
//                   </option>
//                   {categories.map((categories, index) => (
//                     <option key={index}>
//                       {categories.categoryId}
//                     </option>
//                   ))}
//                 </Input>
//                 <Table>
//                   <thead>
//                     <tr>
//                       <th>S.N</th>
//                       <th>Category Title</th>
//                     </tr>
//                   </thead>
//                   {categories.map((categories) => (
//                     <>
//                       <tbody>
//                         <tr>
//                           <th>{categories.categoryId}</th>
//                           <th>{categories.categoryTitle}</th>
//                         </tr>
//                       </tbody>
//                     </>
//                   ))}
//                 </Table>
//               </div>
//               <Container className="text-center">
//                 <Button className="rounded-0" type="submit" color="primary">
//                   create competition
//                 </Button>
//                 <Button className="rounded-0 ms-2" color="danger">
//                   Reset
//                 </Button>
//               </Container>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>

//     );
//   };

//   return (
//     <>
//       <AdminNav />
//       {updateHtml}
//     </>
//   );
// };

// export default UpdateCompetition;
