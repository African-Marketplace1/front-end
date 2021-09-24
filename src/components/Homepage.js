import React, { useState, Component, useEffect } from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Categories from "./Categories";
import Products from "./Products";
import homepagePic from "../assets/homepage-banner.jpg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { connect } from "react-redux";
import { setActiveCategory } from "../actions";

const lightTheme = createTheme({ palette: { mode: "light" } });
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Homepage = (props) => {
  const [productDisplay, setProductDisplay] = useState(false);

  useEffect(() => {
    props.setActiveCategory(null);
  }, []);
  const viewProducts = () => {
    props.setActiveCategory(null);
    setProductDisplay(!productDisplay);
  };

  const { cats, productList } = props;

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="home-wrapper">
        <div className="home-content">
          <Typography
            variant="h1"
            gutterBottom
            color="inherit"
            sx={{ marginTop: "1.5%" }}
          >
            African Marketplace
          </Typography>
          <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6} alignItems="stretch">
                <Item elevation={6} className="homepage-text">
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="inherit"
                    sx={{ padding: "5% 5% 0" }}
                  >
                    Helping you grow <br></br> your business.
                  </Typography>
                  <br></br>
                  <Typography color="inherit" sx={{ padding: "0 5% 5%" }}>
                    Browse our collection to find the products that you need to
                    help you grow your business
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Card style={{ border: "none", boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    src={homepagePic}
                    className="homepage-pic"
                  />
                  {/* <img src={homepagePic} className="homepage-pic"></img> */}
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div className="categories-container">
          <Paper elevation={12}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5%",
              }}
            >
              <Typography align="left" variant="h3" color="inherit">
                {productDisplay === true ? "Product List" : "Categories"}
              </Typography>
              <Typography variant="h5">
                {props.activeCategory ? props.activeCategory : ""}
              </Typography>
              <Button
                color="inherit"
                variant="outlined"
                size="large"
                onClick={viewProducts}
              >
                {productDisplay === true
                  ? "View All Categories"
                  : "View All Products"}
              </Button>
            </Box>
          </Paper>
        </div>

        {(productDisplay ? true : false) && <Products products={productList} />}
        {!productDisplay && (
          <Categories
            key={cats.category_id}
            cats={cats}
            products={productList}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setActiveCategory })(Homepage);
