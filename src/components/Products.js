import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { connect } from "react-redux";
import { setProducts, toggleIsFetching } from "../actions";
import CircularProgress from "@mui/material/CircularProgress";

function Products(props) {
  useEffect(() => {
    props.toggleIsFetching(true);
    axios
      .get("https://africanmarketplace-1.herokuapp.com/products")
      .then((res) => {
        console.log(res);
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
      {props.isFetching && <CircularProgress />}
      {props.products &&
        props.products.map((prod) => {
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
  Products
);
