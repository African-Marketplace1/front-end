import React from "react";
import ProductCard from "./ProductCard";

function UserProducts(props) {
  const { user } = props;
  return (
    <div>
      <div>
        {user.products && (
          <div>
            <h1>Products:</h1>
            <div className="userProducts  d-flex flex-wrap pb-5">
              {user.products.map((product) => {
                return (
                  <ProductCard
                    img={product.img}
                    price={product.price_usd}
                    name={product.name}
                    description={product.description}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      {user.products && !user.products.length && (
        <p className="text-danger">No products listed</p>
      )}
    </div>
  );
}

export default UserProducts;
