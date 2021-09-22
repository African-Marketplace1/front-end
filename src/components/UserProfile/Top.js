import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

function Top(props) {
  return (
    <div className="top d-flex justify-content-center mb-5">
      <div
        className="imgWrap d-flex justify-content-end"
        style={{ width: "50%", height: "30rem", overflow: "hidden" }}
      >
        <img
          src={
            props.currentUser.img ||
            "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
          }
          alt="user profile"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <div className="textWrap text-start ms-4 " style={{ width: "50%" }}>
        <h1>{props.currentUser.username}</h1>
        <p>Location: {props.currentUser.location || "N/A"}</p>
        <p>Email: {props.currentUser.email || "N/A"}</p>
        <div className="buttons d-flex flex-column justify-content-start align-items-start ">
          <Button color="inherit" size="large">
            Edit Profile
          </Button>
          <Button
            color="inherit"
            size="large"
            component={Link}
            to="/addProduct"
          >
            Upload Product
          </Button>
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

export default connect(mapStateToProps)(Top);
