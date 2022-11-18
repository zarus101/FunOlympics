import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { createContact } from "../service/Contact_Service";

const Contact = () => {
  const [contactDetail, setContactDetail] = useState({
    email: "",
    content: "",
  });

  const handleChange = (event, field) => {
    setContactDetail({
      ...contactDetail,
      [field]: event.target.value,
    });
  };

  const handleReset = () => {
    setContactDetail({
      email: "",
      content: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (error.isError){
    //   toast.error("form data is invalid!!")
    //   return
    // }

    createContact(contactDetail)
      .then((resp) => {
        toast.success("message sent successfully");
        setContactDetail({
          email: "",
          content: "",
        });
      })
      .catch((error) => {
        toast.error("error");
      });
  };

  return (
    <div className="login-section">
      <div className="main">
        <div className="row">
          <div className="col-sm first-row">
            <h1 className="text-white font-semibold text-center">Contact us</h1>
            <p className="text-white font-semibold">
              send message to our team :
            </p>
          </div>
          <div className="col-sm second-row">
            <div className="login-form">
              <Form onSubmit={handleSubmit} className="form">
                <FormGroup>
                  <Label className="text-white" for="email">
                    Email:
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={contactDetail.email}
                    onChange={(e) => handleChange(e, "email")}
                    id="email"
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="text-white">Message</Label>
                  <Input
                    type="textarea"
                    name="content"
                    onChange={(e) => handleChange(e, "content")}
                    value={contactDetail.content}
                    id="content"
                  />
                </FormGroup>

                <br />

                <Button className="button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0">
                  Send
                </Button>
                <Button
                  className="font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0"
                  onClick={handleReset}
                  color="secondary"
                >
                  Reset
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
