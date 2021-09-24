import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CategoryProducts from "./CategoryProducts";

import axios from "axios";

export default function Categories(props) {
  const [showProductsInCategory, setShowProductsInCategory] = useState(false);
  const [categoryProductList, setcategoryProductList] = useState([]);
  const { cats, products, changeViewAllState } = props;

  function CategoryDetails(props) {
    const { category } = props;

    const routeToProducts = (event) => {
      event.preventDefault();

      setShowProductsInCategory(!showProductsInCategory);
      axios
        .get(
          `https://africanmarketplace-1.herokuapp.com/categories/${category.category_id}`
        )
        .then((res) => {
          setcategoryProductList(res.data);
          console.log(categoryProductList);
        })
        .catch((err) => console.error(err));
    };

    return (
      <Grid item xs={3} padding="1%">
        <Card>
          <CardActionArea onClick={routeToProducts}>
            <CardMedia component="img" src={category.img} />
            <CardContent>
              <Typography color="inherit" variant="h5">
                {category.category_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }

  console.log(products);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {showProductsInCategory && (
        <CategoryProducts categoryProducts={categoryProductList} />
      )}
      {!showProductsInCategory &&
        cats.map((category) => {
          return <CategoryDetails category={category} />;
        })}
    </Grid>
  );
}
