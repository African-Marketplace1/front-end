import React from "react";
import { Link } from "react-router-dom";
import chevronLeft from "../assets/chevronLeft.svg";
import people from "../assets/people.svg";
import Button from "@mui/material/Button";

function EditUserForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className="editForm py-5">
      <div className="container">
        <div className="top">
          <Link style={{ textDecoration: "none", color: "black" }} to="/user">
            <div className="d-flex align-items-center">
              <div className="pb-1 pe-2">
                <img src={chevronLeft} alt="an icon pointing left" />
              </div>
              <h5 className="text-start m-0">Back</h5>
            </div>
          </Link>
        </div>
        <div className="d-flex">
          <form
            style={{ width: "20rem" }}
            className="m-auto"
            onSubmit={handleSubmit}
          >
            <h2 className="text-start">Edit User</h2>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Username:
              <input style={{ width: "100%", height: "2.25rem" }} />
            </label>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Location:
              <input style={{ width: "100%", height: "2.25rem" }} />
            </label>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Email:
              <input style={{ width: "100%", height: "2.25rem" }} />
            </label>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Profile Image URL:
              <input style={{ width: "100%", height: "2.25rem" }} />
            </label>
            <div className="d-flex justify-content-end">
              <Button color="inherit" type="submit">
                Submit
              </Button>
            </div>
          </form>
          <div
            className="imgWrap d-flex justify-content-center align-items-center"
            style={{ width: "40%" }}
          >
            <img
              src={people}
              alt="people standing together"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserForm;
