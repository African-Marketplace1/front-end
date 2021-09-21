import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import "../App.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const lightTheme = createTheme({ palette: { mode: "light" } });
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Homepage(props) {
  const { cats } = props;

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
                <Item elevation={6}>
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
                <Box sx={{ padding: "2%" }}>
                  <img src="https://source.unsplash.com/random/300x300"></img>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div className="categories-container"></div>
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
              Categories
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              size="large"
              component={Link}
              to={"/login"}
            >
              View All
            </Button>
          </Box>
          <Card component="div" sx={{ display: "inline-block" }}>
            <CardMedia
              component="img"
              src="https://source.unsplash.com/random/300x300"
            />
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </Card>
        </Paper>
      </div>
    </ThemeProvider>
  );
}
