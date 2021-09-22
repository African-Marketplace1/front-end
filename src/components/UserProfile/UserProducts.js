import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

function UserProducts(props) {
  return (
    <div>
      <div>
        {props.currentUser.products && (
          <div className="userProducts  d-flex flex-wrap pb-5">
            {props.currentUser.products.map((product) => {
              return <ProductCard img={product.img} />;
            })}
          </div>
        )}
      </div>
      {props.currentUser.products && !props.currentUser.products.length && (
        <p className="text-danger">You have no products listed</p>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(UserProducts);
