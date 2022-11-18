import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import UserDashboard from "./pages/user-routes/UserDashboard";

import Profile from "./pages/user-routes/Profile";
import UserPrivate from "./pages/user-routes/UserPrivate";
import AdminPrivate from "./pages/admin-routes/AdminPrivate";
import AdminDashboard from "./pages/admin-routes/AdminDashboard";
import Competition from "./pages/admin-routes/Competition";
import Category from "./pages/admin-routes/Category";

import PostPage from "./pages/admin-routes/PostPage";
import SinglePost from "./components/SimglePost";
import PostPage2 from "./pages/user-routes/PostPage2";
import Users from "./pages/admin-routes/Users";

import ChangePassword from "./pages/user-routes/Change_Password";
import UpdateCompetition from "./pages/admin-routes/UpdateCompetition";
import Contact from "./components/Contact";
import ContactList from "./pages/admin-routes/ContactList";
import Updateuser from "./pages/admin-routes/Updateuser";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <ToastContainer position="bottom-center" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/posts/:postId" element={<SinglePost />} />


            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user" element={<UserPrivate />}>
            
              <Route path="dashboard" element={<UserDashboard />} />
              <Route path="changepassword/:userId" element={<ChangePassword />} />
              <Route path="profile" element={<Profile />} />
              <Route path="posts/:postId" element={<PostPage2 />}/>
            </Route>
            <Route path="/admin" element={<AdminPrivate/>}>
              <Route path="dashboard" element={<AdminDashboard/>}/>
              <Route path="competition" element={<Competition/>}/>
              <Route path="category" element={<Category/>}/>
              <Route path="users" element={<Users/>}/>
              <Route path="contacts" element={<ContactList/>}/>
              <Route path="posts/:postId" element={<PostPage/>}/>
              <Route path="updatecompetition/:competitionId" element={<UpdateCompetition/>}/>
              <Route path="updateuser/:id" element={<Updateuser/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
