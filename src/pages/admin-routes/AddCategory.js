import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  Input,
  Label,
} from "reactstrap";
import { isLoggedIN } from "../../auth/Index";

import { addCategory, loadAllCategories } from "../../service/Category_service";
import AdminFooter from "./AdminFooter";

const AddCategory = () => {
  const [category, setCategory] = useState({
    categoryTitle: "",
    categoryDescription: "",
  });

  const [error, setError] = useState({
    errors: "",
    isError: false,
  });

  useEffect(() => {
    // setCategory()
  }, [category]);

  const handleChange = (event, property) => {
    setCategory({ ...category, [property]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (error.isError) {
      toast.error("form data is invalid!!");
      return;
    }

    if(setCategory.categoryTitle===""){
      toast.error("title cannot by empty!!")
      return;
    }

    addCategory(category)
      .then((resp) => {
        toast.success("category is added successfully" + resp.categoryId);
        setCategory({
          categoryTitle: "",
          categoryDescription: "",
        });
      })
      .catch((error) => {
        console.log("error");
        toast.error("error");

        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <>
      <div className="wrapper mt-5">
        <Card className="shadow-sm">
          <CardBody>
            <h3> add category</h3>

            <Form onSubmit={handleSubmit}>
              <div className="my-3">
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="categoryTitle"
                  value={category.categoryTitle}
                  onChange={(e) => {
                    handleChange(e, "categoryTitle");
                  }}
                  placeholder="enter title"
                />
              </div>

              <div className="my-3">
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  id="categoryDescription"
                  placeholder="enter description"
                  value={category.categoryDescription}
                  onChange={(e) => {
                    handleChange(e, "categoryDescription");
                  }}
                  style={{ height: "100px" }}
                />
              </div>

              <Container className="text-center">
                <Button type="submit" className="rounded-0" color="primary">
                  Add Category
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

export default AddCategory;
