import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ListGroup, ListGroupItem } from "reactstrap";
import { loadAllCategories } from "../service/Category_service";
import "./main.scss";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        setCategories([...data]);
      })
      .catch((error) => {
        toast.error("error in loading categorries");
      });
  }, []);

  return (
    <dic>
      <ListGroup className="lists mt-5 ">
        <ListGroupItem tag={Link} to="/" action={true} className="border=0">
          All Competition
        </ListGroupItem>
        {categories &&
          categories.map((cat, index) => {
            return (
              <ListGroupItem
                tag={Link}
                to={"/categories/" + cat.categoryId}
                className="border 0 shadow-0 mt-1"
                action={true}
                key={index}
              >
                {cat.categoryTitle}
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </dic>
  );
}

export default CategoryMenu;
