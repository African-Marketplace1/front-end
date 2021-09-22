import React from "react";
import "../App.css";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Categories(props) {
  const { cats } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      {cats.map((category) => {
        return (
          <Grid item xs={3} padding="1%">
            <Card component="div">
              <CardMedia component="img" src={category.img} />
              <CardContent>
                <Typography color="inherit" variant="h5">
                  {category.category_name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
