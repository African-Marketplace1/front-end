import React from "react";
import Top from "./Top.js";
import UserProducts from "./UserProducts.js";
import { connect } from "react-redux";

function User(props) {
  return (
    <div className="userPage py-5">
      {props.currentUser && (
        <div className="container">
          <Top />
          <UserProducts />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(User);
