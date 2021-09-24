import React from "react";

function Top(props) {
  const { user } = props;
  return (
    <div className="top d-flex justify-content-center mb-5">
      <div
        className="imgWrap d-flex justify-content-end"
        style={{ width: "50%", height: "30rem", overflow: "hidden" }}
      >
        <img
          src={
            user.img ||
            "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
          }
          alt="user profile"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <div className="textWrap text-start ms-4 " style={{ width: "50%" }}>
        <h1>{user.username}</h1>
        <p>Location: {user.location}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default Top;
