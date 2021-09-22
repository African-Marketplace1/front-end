// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, NavLink, useRouteMatch } from "react-router-dom";

import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Products(props) {
  const { products } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {products.map((prod) => {
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
                <Typography color="inherit">
                  Seller: {prod.seller.username}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
