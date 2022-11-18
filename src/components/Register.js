import React, { useEffect } from "react";
import { useState } from "react";
import { signUP } from "./Services";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import MainNavbar from "./Navbar";
import "./main.scss";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Register = () => {
  const navigate = useNavigate("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    country: "",
    gender: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  useEffect(() => {}, [data]);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleReset = () => {
    setData({
      name: "",
      email: "",
      country: "",
      gender: "",
      password: "",
      about: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error.isError) {
      toast.error("form data is invalid!!");
      return;
    }

    signUP(data)
      .then((resp) => {
        toast.success(resp.name + " is registered successfully");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
          country: "",
          gender: "",
        });
      })
      .catch((error) => {
        toast.error("error");

        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <>
      <MainNavbar />
      <div className="login-section">
        <div className="main">
          <div className="row">
            <div className="col-sm first-row">
              <h1 className="text-white font-semibold text-center">Register</h1>
              <p className="text-white font-semibold">
                Please register here using correct information
              </p>
            </div>
            <div className="col-sm second-row">
              <Form className="form" onSubmit={handleSubmit}>
                <FormGroup className="group block">
                  <Label className="text-white" for="email">
                    Email:
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => handleChange(e, "email")}
                    invalid={error.errors?.response?.data?.email ? true : false}
                    id="email"
                    placeholder="enter your email"
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>

                <FormGroup className="group">
                  <Label className="text-white">Name:</Label>
                  <Input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e) => handleChange(e, "name")}
                    placeholder="enter your name"
                    invalid={error.errors?.response?.data?.name ? true : false}
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.name}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white">gender:</Label>

                  <Input
                    type="select"
                    id="categoryId"
                    placeholder="enter category"
                    name="categoryId"
                    onChange={(e) => handleChange(e, "gender")}
                    defaultValue={0}
                    invalid={
                      error.errors?.response?.data?.gender ? true : false
                    }
                  >
                    <option disabled value={0}>
                      ---Select gender---
                    </option>

                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    <FormFeedback>
                      {error.errors?.response?.data?.gender}
                    </FormFeedback>
                  </Input>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white">country:</Label>
                  <Input
                    type="text"
                    name="country"
                    value={data.country}
                    onChange={(e) => handleChange(e, "country")}
                    placeholder="enter your country"
                    invalid={
                      error.errors?.response?.data?.country ? true : false
                    }
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.country}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white">Password:</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e, "password")}
                    placeholder="enter your password"
                    value={data.password}
                    invalid={
                      error.errors?.response?.data?.password ? true : false
                    }
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white">About:</Label>
                  <Input
                    type="textarea"
                    name="about"
                    onChange={(e) => handleChange(e, "about")}
                    value={data.about}
                    placeholder="describe yourself!!"
                    invalid={error.errors?.response?.data?.about ? true : false}
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.about}
                  </FormFeedback>
                </FormGroup>

                <Button className="button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0">
                  Register
                </Button>
                <Button
                  className=" font-semibold text-white rounded-0"
                  onClick={handleReset}
                  color="secondary"
                >
                  Reset
                </Button>
              </Form>

              <div className="social-icons">
                <p className="text-white font-semibold">
                  Already Have a Account!{" "}
                  <a
                    onClick={() => navigate("/login")}
                    className="red text-red-700"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
