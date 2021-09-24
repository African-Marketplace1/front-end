// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, NavLink, useRouteMatch } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import { setProducts, toggleIsFetching } from "../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

function CategoryProducts(props) {
  const { categoryProducts } = props;

  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get("https://africanmarketplace-1.herokuapp.com/categories")
      .then((res) => {
        props.toggleIsFetching(false);
        props.setProducts(res.data);
      })
      .catch((err) => {
        props.toggleIsFetching(false);
        console.dir(err);
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {categoryProducts.map((prod) => {
        return (
          <Grid item xs={3} padding="1%">
            <Card component="div">
              <CardMedia component="img" height="300px" src={prod.img} />
              <CardContent>
                <Typography gutterBottom color="inherit" variant="h5">
                  {prod.name}
                </Typography>
                <Typography color="inherit">${prod.price_usd}</Typography>
                <Typography color="inherit">{prod.description}</Typography>
                <Link
                  to={`/user/${prod.seller.user_id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography color="inherit">
                    Seller: {prod.seller.username}
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setProducts, toggleIsFetching })(
  CategoryProducts
);
