import React from "react";

function ProductCard(props) {
  const { img, price, name, description } = props;
  return (
    <div
      className="productCardWrap bg-light border p-2 m-2 rounded"
      style={{ width: "23.291%", boxShadow: "0px 2px 5px grey" }}
    >
      <div
        className="imgWrap bg-white d-flex justify-content-center align-items-center rounded border"
        style={{ aspectRatio: "1" }}
      >
        <img
          src={img}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          alt="product logo"
          className="rounded"
        />
      </div>
      <div
        className="textWrap d-flex flex-column justify-content-between  align-items-between px-4 pt-2 "
        style={{ minHeight: "7rem" }}
      >
        <h3>{name}</h3>
        <p>{description}</p>
        <h5 className="m-0 ">${price.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default ProductCard;
