import React, { useEffect } from "react";
import Top from "./Top.js";
import axios from "axios";
import UserProducts from "./UserProducts.js";
import { connect } from "react-redux";
import { toggleIsFetching, setCurrentUser } from "../../actions";

function User(props) {
  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get(
        `https://africanmarketplace-1.herokuapp.com/users/${props.currentUser.user_id}`
      )
      .then((res) => {
        props.setCurrentUser(res.data);
        console.log(res.data);
        props.toggleIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        props.toggleIsFetching(false);
      });
  }, []);
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

export default connect(mapStateToProps, { toggleIsFetching, setCurrentUser })(
  User
);
