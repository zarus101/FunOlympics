import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { loginUser } from "./Services";
import { toast } from "react-toastify";
import { doLogin, userList } from "../auth/Index";
import MainNavbar from "./Navbar";
import Footer from "./Footer";
import { createContact } from "../service/Contact_Service";
import { getAllUsers } from "../service/User_service";
import { useEffect } from "react";

const LoginForm = ({ Login, error }) => {
  const navigate = useNavigate("");

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    setLoginDetail({
      ...loginDetail,
      [field]: event.target.value,
    });
  };
  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("username and password is required");
      return;
    }

    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        doLogin(data, () => {
          console.log(data);
          toast.success("login success");

          if (data?.user.roles[0].name === "ROLE_ADMIN") {
            navigate("/admin/dashboard");
          } else {
            navigate("/user/dashboard");
          }
        });
      })
      .catch((error) => {
        console.log("error");
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        }
        toast.error("something went wrong in server");
      });
  };

  const [login, setLogin] = useState(true);
  const [contact, setContact] = useState(false);

  const loginhandle = () => {
    setLogin(true);
    setContact(false);
  };

  const contactHandle = () => {
    setContact(true);
    setLogin(false);
  };

  const [contactDetail, setContactDetail] = useState({
    email: "",
    content: "",
  });

  const handleContactChange = (event, field) => {
    setContactDetail({
      ...contactDetail,
      [field]: event.target.value,
    });
  };



  const [users, setUsers] = useState([]);
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



  const handleSubmitMessage = (event) => {
    event.preventDefault();
    // if (error.isError){
    //   toast.error("form data is invalid!!")
    //   return
    // }

    if(contactDetail.email===""){
      toast.error("email is required")
      return;
    }
    if(contactDetail.content===""){
      toast.error("message should not be empty!!")
      return
    }
    
    else{
      createContact(contactDetail)
      .then((resp) => {
        toast.success("message sent successfully");
        toast.warning(
          "please try logging using default password username@123 after 10 minutes!!"
        );

        setLogin(true);
        setContact(false);


        setContactDetail({
          email: "",
          content: "",
        });
      })
      .catch((error) => {
        toast.error("error");
      });

    }


    
  };

  return (
    <>
      <MainNavbar />
      <Container className="base w-75">
        <div className="login-section">
          <div className="main">
            <div className="row">
              <div className="col-sm first-row">
                <h1 className="text-white font-semibold text-center">Login</h1>
                <p className="text-white font-semibold">
                  login using email and password
                </p>
              </div>

              <div className="col-sm second-row">
                {login && (
                  <div className="login-form">
                    <Form onSubmit={handleSubmitForm} className="form">
                      <FormGroup>
                        <Label className="text-white" for="email">
                          Email:
                        </Label>
                        <Input
                          type="text"
                          name="username"
                          value={loginDetail.username}
                          onChange={(e) => handleChange(e, "username")}
                          id="text"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label className="text-white">Password:</Label>
                        <Input
                          type="password"
                          name="password"
                          onChange={(e) => handleChange(e, "password")}
                          value={loginDetail.password}
                          id="password"
                        />
                      </FormGroup>
                      <p onClick={contactHandle} className="b text-white hover:cursor-pointer">
                        Forget Password?
                      </p>

                      <br />

                      <Button className="button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0">
                        Login
                      </Button>
                      <Button
                        className="font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0"
                        onClick={handleReset}
                        color="secondary"
                      >
                        Reset
                      </Button>
                    </Form>

                    <div className="social-icons ">
                      <p className="text-white font-semibold">
                        Create Account!{" "}
                        <a
                          onClick={() => navigate("/register")}
                          className="red text-red-700"
                          href="#"
                        >
                          Register
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                {contact && (
                  <div>
                    <p className="text-white">send message to the admin including the correct registered email!!</p>
                    <div className="login-form">
                      <Form onSubmit={handleSubmitMessage} className="form">
                        <FormGroup>
                          <Label className="text-white" for="email">
                            Email:
                          </Label>
                          <Input
                            type="email"
                            name="email"
                            value={contactDetail.email}
                            onChange={(e) => handleContactChange(e, "email")}
                            id="email"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label className="text-white">Message</Label>
                          <Input
                            type="textarea"
                            name="content"
                            onChange={(e) => handleContactChange(e, "content")}
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
                          onClick={loginhandle}
                          color="secondary"
                        >
                          Login
                        </Button>
                      </Form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <h1>Login</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmitForm} >
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                    type="text" name="username" value={loginDetail.username}  onChange={(e)=> handleChange(e,'username')} id="text"
                  />
   


                </FormGroup>
                
                <FormGroup>
                  <Label>Password:</Label>
                  <Input
                   type="password" name='password' onChange={(e)=> handleChange(e,'password')} value={loginDetail.password} id='password' />
                 
                </FormGroup>
                
                <Container className="text-center">
                  <Button color="dark">Login</Button>
                  <Button onClick={handleReset} color="secondary">
                    Reset
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
      </Container>

      <Footer />
    </>
  );
};

export default LoginForm;
