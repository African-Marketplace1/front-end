import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import cats from "./DummyData";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AddProduct from "./components/AddProduct";
import axios from "axios";

const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  //product and category state
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState(cats);

  //category & pull

  useEffect(() => {
    axios
      .get("https://africanmarketplace-1.herokuapp.com/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("https://africanmarketplace-1.herokuapp.com/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Homepage cats={categories} productList={productList} />
          </Route>
          <Route path={"/login"}>
            <Login />
          </Route>
          <Route path={"/register"}>
            <Register />
          </Route>
          <Route path={"/addProduct"}>
            <AddProduct setProducts={setProducts} />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
