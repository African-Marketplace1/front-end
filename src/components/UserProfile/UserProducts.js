import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

function UserProducts(props) {
  return (
    <div className="userProducts  d-flex flex-wrap">
      {props.currentUser.products.map((product) => {
        return <ProductCard />;
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(UserProducts);
