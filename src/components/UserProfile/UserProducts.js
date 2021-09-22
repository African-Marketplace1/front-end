import React from "react";
import ProductCard from "./ProductCard";

function UserProducts(props) {
  return (
    <div className="userProducts py-5 d-flex flex-wrap">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default UserProducts;
