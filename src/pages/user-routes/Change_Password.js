import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { getCurrentUserDetail, isLoggedIN } from "../../auth/Index";
import { changePassword } from "../../service/User_service";
import UserNav from "./UserNav";
import "./user.scss";
import UserFooter from "./UserFooter";
import bcrypt from "bcryptjs";

const ChangePassword = () => {
  const [login, setLogin] = useState(false);

  const [user, setUser] = useState(undefined);

  const [oldpassword, setOldPassword] = useState("");

  const [post, setPost] = useState({
    password: "",
  });

  useEffect(() => {
    setLogin(isLoggedIN());
    console.log(getCurrentUserDetail());
    console.log(getCurrentUserDetail());
    setUser(getCurrentUserDetail());
  }, []);

  const handleChange = (event, property) => {
    setPost({ ...post, [property]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (oldpassword === "" || post.password === "") {
      toast.error("enter your old password");
      console.log(getCurrentUserDetail.password);
      return;
    } else {
      changePassword(post, user.id)
        .then((res) => {
          toast.success("password changed succcessfully");
        })
        .catch((error) => {
          toast.error("error");
        });
    }
  };

  return (
    <>
      <UserNav />
      <Container className="base w-75">
        <div className="login-section">
          <div className="main">
            <div className="row">
              <div className="col-sm first-row">
                <h1 className="text-white font-semibold text-center">
                  Change Password
                </h1>
                <p className="text-white font-semibold">
                  Change your Password by filling the form
                </p>
              </div>
              <div className="col-sm second-row">
                <div className="login-form">
                  <Form onSubmit={handleSubmitForm} className="form">
                    <FormGroup>
                      <Label className="text-white" for="password">
                        Old Password:
                      </Label>
                      <Input
                        type="password"
                        name="oldpassword"
                        value={oldpassword}
                        id="password1"
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label className="text-white">New Password:</Label>
                      <Input
                        type="password"
                        name="newpassword"
                        value={post.password}
                        onChange={(event) => handleChange(event, "password")}
                        id="password2"
                      />
                    </FormGroup>

                    <Container className="text-center bg-transparent">
                      <Button color="primary">Save</Button>
                      <Button className="mx-3" color="dark">
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <UserFooter />
    </>
  );
};

export default ChangePassword;
