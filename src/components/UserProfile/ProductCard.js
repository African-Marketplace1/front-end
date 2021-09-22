import React from "react";
import pencil from "../../assets/pencil.svg";
import axios from "axios";
import x from "../../assets/x.svg";
import { connect } from "react-redux";
import { setCurrentUserProducts, toggleIsFetching } from "../../actions";

function ProductCard(props) {
  const { img, name, price, productId } = props;

  const handleRemove = (e) => {
    e.preventDefault();
    // props.toggleIsFetching(true);
    axios
      .delete(
        `https://africanmarketplace-1.herokuapp.com/products/${productId}`
      )
      .then((res) => {
        props.setCurrentUserProducts(res.data);
        // props.toggleIsFetching(false);
      })
      .catch((err) => {
        console.dir(err);
        // props.toggleIsFetching(false);
      });
  };
  return (
    <div
      className="productCardWrap bg-light border p-2 m-2"
      style={{ width: "23.291%" }}
    >
      <div
        className="imgWrap bg-light d-flex justify-content-center align-items-center"
        style={{ aspectRatio: "1" }}
      >
        <img
          src={img}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          alt="product logo"
        />
      </div>
      <div
        className="textWrap d-flex flex-column justify-content-between  align-items-between px-4 "
        style={{ minHeight: "7rem" }}
      >
        <h3>{name}</h3>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0">${price.toFixed(2)}</h5>
          <div className="icons d-flex">
            <div
              className="bg-light d-flex align-items-center justify-content-center"
              style={{ aspectRatio: "1" }}
            >
              <img src={pencil} />
            </div>
            <div
              className="bg-light d-flex align-items-center justify-content-center"
              style={{ aspectRatio: "1" }}
              onClick={handleRemove}
            >
              <img src={x} alt="close logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { setCurrentUserProducts, toggleIsFetching })(
  ProductCard
);
