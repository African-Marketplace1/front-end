import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

function Top(props) {
  return (
    <div className="top d-flex justify-content-center">
      <div className="imgWrap" style={{ width: "30rem", height: "30rem" }}>
        <img
          src={
            props.currentUser.img ||
            "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
          }
          alt="user profile"
          className="img-fluid"
        />
      </div>
      <div className="textWrap text-start ms-4" style={{ width: "40rem" }}>
        <h1>{props.currentUser.username}</h1>
        <p>Location: {props.currentUser.location || "N/A"}</p>
        <p>Email: {props.currentUser.email || "N/A"}</p>
        <div className="buttons d-flex flex-column justify-content-start align-items-start ">
          <Button color="inherit" size="large">
            Edit Profile
          </Button>
          <Button color="inherit" size="large">
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
