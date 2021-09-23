import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import chevronLeft from "../assets/chevronLeft.svg";
import people from "../assets/people.svg";
import Button from "@mui/material/Button";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions";
import { CircularProgress } from "@mui/material";

function EditUserForm(props) {
  const { push } = useHistory();
  const initialState = {
    email: props.currentUser.email,
    img: props.currentUser.img,
    location: props.currentUser.location,
    username: props.currentUser.username,
  };
  const [formData, setFormData] = useState(initialState);
  const [isFetching, setIsFetching] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFetching(true);
    axios
      .put(
        `https://africanmarketplace-1.herokuapp.com/users/${props.currentUser.user_id}`,
        formData
      )
      .then((res) => {
        props.setCurrentUser(res.data);
        setIsFetching(false);
        push("/user");
      })
      .catch((err) => {
        console.dir(err);
        setIsFetching(false);
      });

    console.log(props);
  };
  return (
    <div className="editForm py-5">
      <div className="container">
        <div className="top mb-4">
          <Link style={{ textDecoration: "none", color: "black" }} to="/user">
            <div className="d-flex align-items-center">
              <div className="pb-1 pe-2">
                <img src={chevronLeft} alt="an icon pointing left" />
              </div>
              <h5 className="text-start m-0">Back</h5>
            </div>
          </Link>
          {isFetching && <CircularProgress style={{ position: "absolute" }} />}
        </div>
        <div className="d-md-flex ">
          <form
            style={{ width: "20rem" }}
            className="m-auto"
            onSubmit={handleSubmit}
          >
            <h2 className="text-start mb-3">Edit User</h2>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Username:
              <input
                style={{ width: "100%", height: "2.25rem" }}
                name="username"
                value={formData.username}
                onChange={onChange}
              />
            </label>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Location:
              <input
                style={{ width: "100%", height: "2.25rem" }}
                name="location"
                value={formData.location}
                onChange={onChange}
              />
            </label>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Email:
              <input
                style={{ width: "100%", height: "2.25rem" }}
                name="email"
                value={formData.email}
                onChange={onChange}
              />
            </label>
            <label className="d-flex flex-column justify-content-center align-items-start mb-3">
              Profile Image URL:
              <input
                style={{ width: "100%", height: "2.25rem" }}
                name="img"
                value={formData.img}
                onChange={onChange}
              />
            </label>
            <div className="d-flex justify-content-end">
              <Button color="inherit" type="submit">
                Submit
              </Button>
            </div>
          </form>
          <div
            className="imgWrap d-flex justify-content-center align-items-center m-auto"
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

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(EditUserForm);
