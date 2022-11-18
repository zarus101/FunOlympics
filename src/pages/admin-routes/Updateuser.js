import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import FacultyService from "../../service/UpdateService";
import AdminFooter from "./AdminFooter";
import AdminNav from "./AdminNav";

const Updateuser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
    password: "",
    role: "",
    gender: "",
    country: "",
  });

  const HandleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FacultyService.getUserById(id);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    FacultyService.updateUser(user, id)
      .then((response) => {
        toast.success("successfully updated!!");
        navigate("/admin/users");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AdminNav />
      <br />
      <div className="login-section">
        <div className="main">
          <div className="row">
            <div className="col-sm first-row">
              <h1 className="text-white font-semibold text-center">Update User</h1>
              <p className="text-white font-semibold">
                Update the Information of the user
              </p>
            </div>
            <div className="col-sm second-row">
              <Form className="form" onSubmit={updateUser}>
                <FormGroup className="group">
                  <Label className="text-white" for="name">
                    Name:
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(e) => HandleChange(e, "name")}
                    // invalid={ error.errors?.response?.data?.email ? true : false}
                    id="name"
                  />
                  <FormFeedback>
                    {/* { error.errors?.response?.data?.email} */}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white" for="email">
                    Email:
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => HandleChange(e, "email")}
                    // invalid={ error.errors?.response?.data?.email ? true : false}
                    id="email"
                  />
                  <FormFeedback>
                    {/* { error.errors?.response?.data?.email} */}
                  </FormFeedback>
                </FormGroup>

                <FormGroup className="group">
                  <Label className="text-white">gender:</Label>

                  <Input
                    type="select"
                    id="categoryId"
                    placeholder="enter category"
                    name="categoryId"
                    onChange={(e) => HandleChange(e, "gender")}

                    //   invalid={ error.errors?.response?.data?.gender ? true : false}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    <FormFeedback>
                      {/* { error.errors?.response?.data?.gender} */}
                    </FormFeedback>
                  </Input>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white">country:</Label>
                  <Input
                    type="text"
                    name="country"
                    value={user.country}
                    onChange={(e) => HandleChange(e, "country")}
                    placeholder="enter your country"
                    // invalid={ error.errors?.response?.data?.country ? true : false}
                  />
                  <FormFeedback>
                    {/* { error.errors?.response?.data?.country} */}
                  </FormFeedback>
                </FormGroup>

                <FormGroup className="group">
                  <Label className="text-white">Role:</Label>

                  <Input
                    type="select"
                    id="role"
                    placeholder="role"
                    name="categoryId"
                    onChange={(e) => HandleChange(e, "role")}

                    //   invalid={ error.errors?.response?.data?.gender ? true : false}
                  >
                    <option>ROLE_ADMIN</option>
                    <option>ROLE_NORMAL</option>
                    <FormFeedback>
                      {/* { error.errors?.response?.data?.gender} */}
                    </FormFeedback>
                  </Input>
                </FormGroup>
                <FormGroup className="group">
                  <Label className="text-white">Password:</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={(e) => HandleChange(e, "password")}
                    placeholder="enter your password"
                    value={user.password}
                    // invalid={ error.errors?.response?.data?.password ? true : false}
                  />
                  <FormFeedback>
                    {/* { error.errors?.response?.data?.password} */}
                  </FormFeedback>
                </FormGroup>

                <Button className="button font-semibold text-white bg-red-600 mx-2  h-10 w-20 hover:bg-red-700 rounded-0">
                  Update
                </Button>
                <Button
                  className=" font-semibold text-white rounded-0"
                  onClick={() => navigate("/admin/users")}
                  color="secondary"
                >
                  Cancel
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <br />

      <AdminFooter />
    </>
  );
};

export default Updateuser;
