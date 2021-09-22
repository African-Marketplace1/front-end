import React from "react";
import ProductCard from "./ProductCard";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";

function UserProducts(props) {
  return (
    <div>
      <div>
        {props.currentUser.products && (
          <div>
            <h1>Your Products:</h1>
            <div className="userProducts  d-flex flex-wrap pb-5">
              {props.currentUser.products.map((product) => {
                return (
                  <ProductCard
                    img={product.img}
                    price={product.price_usd}
                    name={product.name}
                    productId={product.product_id}
                  />
                );
              })}
            </div>
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
