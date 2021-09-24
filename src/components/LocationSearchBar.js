import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { setSearchLocation } from "../actions";
import { connect } from "react-redux";
import search from "../assets/search.svg";
import {
  setSortingDistance,
  setLocationSortedProducts,
  toggleIsFetching,
} from "../actions";
import { getDistance } from "geolib";
import CircularProgress from "@mui/material/CircularProgress";

function LocationBar(props) {
  const sortedProducts = [];
  const { push } = useHistory();
  const [isFetching, setIsFetching] = useState(false);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  async function findProducts() {
    console.log(props);
    try {
      const results = await geocodeByAddress(props.searchLocation);
      const baseCoordinates = await getLatLng(results[0]);

      props.users.forEach(async (user) => {
        console.log("in here");
        if (user.location || props.sortingDistance) {
          const result = await geocodeByAddress(user.location);
          const userCoordinates = await getLatLng(result[0]);
          const distance_m = getDistance(baseCoordinates, userCoordinates);
          const distance_mi = distance_m * 0.000621371;
          if (distance_mi < props.sortingDistance) {
            user.products.forEach((prod) => {
              prod.distance = distance_mi;
              prod.seller = user.username;
              console.log(user.user_id);
              prod.user_id = user.user_id;
            });
            sortedProducts.push(...user.products);
            console.log(sortedProducts);
          }
        }
      });
    } catch (err) {
      console.dir(err);
      setIsFetching(false);
    }
    console.log("okau");
  }
  const handleChangeDist = (e) => {
    const value = Number(e.target.value);
    if (value) {
      props.setSortingDistance(value);
    } else {
      props.setSortingDistance(null);
    }
  };
  const handleSelect = async (value) => {
    console.log(value);
    const results = await geocodeByAddress(value);
    console.log(results);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.sortingDistance);
    console.log(address);
    if (props.sortingDistance && address) {
      props.setSearchLocation(address);

      console.log("working");
      setIsFetching(true);
      await findProducts();
      setTimeout(() => {
        props.setLocationSortedProducts(sortedProducts);
        setIsFetching(false);
      }, 200);
      push("/locationSearch");
    }
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <form onSubmit={handleSubmit} className="d-flex">
              {isFetching && (
                <CircularProgress style={{ display: "absolute" }} />
              )}
              <select onChange={handleChangeDist} className="me-2">
                <option value={null}>Distance</option>
                <option value="5">5 mi</option>
                <option value="25">25 mi</option>
                <option value="100">100 mi</option>
                <option value="500">500 mi</option>
                <option value="1000">1000 mi</option>
                <option value="2500">2500 mi</option>
                <option value="5000">5000 mi</option>
              </select>
              <div>
                <div className="m-auto " style={{ width: "22rem" }}>
                  <div className="d-flex border justify-content-between">
                    <input
                      {...getInputProps({
                        placeholder: "Type Address",
                      })}
                      style={{ width: "400px", outline: "none", border: "0px" }}
                    />
                    {/* <Link to="/locationSearch"> */}
                    <button className=" border-0" type="submit">
                      <img
                        src={search}
                        style={{ cursor: "pointer" }}
                        type="submit"
                        alt="magnifying glass icon"
                      />
                    </button>
                    {/* </Link> */}
                  </div>

                  <div
                    style={{
                      zIndex: "3",
                      position: "absolute",
                      paddingTop: "2px",
                      // border: "2px solid black",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    {loading ? (
                      <div style={{ backgroundColor: "white", width: "20rem" }}>
                        ...Loading
                      </div>
                    ) : null}

                    {suggestions.map((suggestion) => {
                      const style = {
                        zIndex: "2",
                        width: "20rem",
                        cursor: suggestion.active ? "pointer" : null,
                        backgroundColor: suggestion.active
                          ? "#d3d3d3"
                          : "#f2f2f2",
                      };
                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </PlacesAutocomplete>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  setSearchLocation,
  setSortingDistance,
  setLocationSortedProducts,
  toggleIsFetching,
})(LocationBar);
