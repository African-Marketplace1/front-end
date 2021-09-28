import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDistance } from "geolib";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { setLocationSortedProducts } from "../actions";
import CircularProgress from "@mui/material/CircularProgress";
const sortedProducts = [];

function LocationSearch(props) {
  const [test, setTest] = useState(false);
  //   async function findProducts() {
  //     console.log(props);
  //     const results = await geocodeByAddress(props.searchLocation);
  //     const baseCoordinates = await getLatLng(results[0]);

  //     props.users.forEach(async (user) => {
  //       if (user.location) {
  //         const result = await geocodeByAddress(user.location);
  //         const userCoordinates = await getLatLng(result[0]);
  //         const distance_m = getDistance(baseCoordinates, userCoordinates);
  //         const distance_mi = distance_m * 0.000621371;
  //         console.log(props.sortingDistance);
  //         // console.log(distance_mi);
  //         if (distance_mi < props.sortingDistance) {
  //           user.products.forEach((prod) => {
  //             prod.distance = distance_mi;
  //             prod.seller = user.username;
  //           });
  //           sortedProducts.push(...user.products);
  //           console.log(sortedProducts);
  //         }
  //       }
  //     });
  //   }
  useEffect(() => {
    setTest(!test);
  }, [props.locationSortedProducts]);
  return (
    <div className="locationSearch py-5 container">
      <div className="d-flex flex-wrap">
        {props.locationSortedProducts.map((prod) => {
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
                  src={prod.img}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  alt="product logo"
                  className="rounded"
                />
              </div>
              <div
                className="textWrap d-flex flex-column justify-content-between  align-items-between px-4 pt-2 "
                style={{ minHeight: "10rem" }}
              >
                <div>
                  <h3 style={{ fontSize: "1.5rem" }}>{prod.name}</h3>
                  <p>{prod.description}</p>
                  <p>distance: {prod.distance.toFixed(0)} mi.</p>
                  <Link
                    to={`/user/${prod.user_id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <p>seller: {prod.seller}</p>
                  </Link>
                </div>
                <h5 className="m-0 ">${prod.price_usd.toFixed(2)}</h5>
              </div>
            </div>
          );
        })}
        {!props.locationSortedProducts.length && (
          <p className="text-danger m-auto">No products found in this area</p>
        )}
        {props.isFetching && <CircularProgress />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setLocationSortedProducts })(
  LocationSearch
);
