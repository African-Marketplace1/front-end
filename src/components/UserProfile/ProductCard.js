import React from "react";
import pencil from "../../assets/pencil.svg";

function ProductCard(props) {
  const { img, name, price } = props;
  return (
    <div
      className="productCardWrap bg-light border p-2 m-2"
      style={{ width: "23.291%" }}
    >
      <div
        className="imgWrap bg-light d-flex justify-content-center align-items-center"
        style={{ aspectRatio: "1" }}
      >
        <img src={img} style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </div>
      <div className="textWrap d-flex flex-column justify-content-center px-4 ">
        <h3>{name}</h3>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0">${price.toFixed(2)}</h5>
          <div
            className="bg-light d-flex align-items-center justify-content-center"
            style={{ aspectRatio: "1" }}
          >
            <img src={pencil} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
