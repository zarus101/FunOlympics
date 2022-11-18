import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
  Table,
} from "reactstrap";
import { loadAllCategories } from "../../service/Category_service";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { docreateCompetition, uploadPostImage } from "../../service/Post_Competition_Service";
import { getCurrentUserDetail } from "../../auth/Index";
import AdminFooter from "./AdminFooter";

const AddCompetition = () => {
  const [categories, setCategories] = useState([]);
  const editor = useRef(null);
  // const[content, setContent]=useState('')
  const [user, setUser] = useState(undefined);
  const [image, setImage] = useState(null)

  const [competition, setCompetition] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  ///for loading categories
  useEffect(() => {
    setUser(getCurrentUserDetail());
    loadAllCategories()
      .then((data) => {
        
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //field change function
  const fieldChanged = (event) => {
    setCompetition({ ...competition, [event.target.name]: event.target.value });
  };

  const contentFieldChanaged = (data) => {

    setCompetition({ ...competition, 'content': data })


}

  //create competition function
  const createCompetition = (event) => {
    event.preventDefault();

    if (competition.title.trim() === "") {
      toast.error("title is required");
      return;
    }
    if (competition.content.trim() === "") {
      toast.error("Link is required");
      return;
    }
    if (competition.categoryTitle === "") {
      toast.warning("select category");
      return;
    }

    //submit the form on server
    competition["userId"] = user.id;
    docreateCompetition(competition)
      .then((data) => {
        uploadPostImage(image,data.postId).then(data=>{
          toast.success("Image Uploaded !!")
      }).catch(error=>{
          toast.error("Error in uploading image")
          console.log(error)
      })

        toast.success("competition has been added successfully!!")
       setCompetition({
        title: "",
        content: "",
        categoryId: "",
       })
      })
      .catch((error) => {
        toast.error("Competition Not Added!!!");
      });
  };


      //handling file chagne event
      const handleFileChange=(event)=>{
        
        setImage(event.target.files[0])
    }

  return (
    <>
      <div className="wrapper">
        <Card className="shadow-sm">
          <CardBody>
        
            <h3> add competition</h3>

            <Form onSubmit={createCompetition}>
              <div className="my-3">
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  className="rounded-0"
                  name="title"
                  placeholder="enter competition title"
                  onChange={fieldChanged}
                />
              </div>

              <div className="my-3">
                            <Label for="content" >Post Content</Label>
                            {/* <Input
                                type="textarea"
                                id="content"
                                placeholder="Enter here"
                                className="rounded-0"
                                style={{ height: '300px' }}
                            /> */}

                            <JoditEditor
                                ref={editor}
                                value={competition.content}

                                onChange={(newContent) => contentFieldChanaged(newContent)}
                            />
                        </div>

                        <div className="mt-3">
                            <Label for="image">Select Post banner</Label>
                            <Input id="image" type="file" onChange={handleFileChange} />
                        </div>

         
              <div className="my-3">
                <Label for="category">category</Label>
                <Input
                  type="select"
                  id="categoryId"
                  placeholder="enter category"
                  name="categoryId"
                  onChange={fieldChanged}
                  defaultValue={0}
                >
                  <option disabled value={0}>
                    ---Select Category---
                  </option>
                  {categories.map((categories, index) => (
                    <option key={index}>
                      {categories.categoryId}
                    </option>
                  ))}
                </Input>
                <Table>
                  <thead>
                    <tr>
                      <th>S.N</th>
                      <th>Category Title</th>
                    </tr>
                  </thead>
                  {categories.map((categories) => (
                    <>
                      <tbody>
                        <tr>
                          <th>{categories.categoryId}</th>
                          <th>{categories.categoryTitle}</th>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </Table>
              </div>
              <Container className="text-center">
                <Button className="rounded-0" type="submit" color="primary">
                  create competition
                </Button>
                <Button className="rounded-0 ms-2" color="danger">
                  Reset
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AddCompetition;
