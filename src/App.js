import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/Categories";
import { Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import cats from "./DummyData";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/UserProfile/User";
import ForeignUser from "./components/ForeignUser/ForeignUser";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AddProduct from "./components/AddProduct";
import PrivateRoute from "./components/PrivateRoute";
import EditProductForm from "./components/EditProductForm";

import axios from "axios";

const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  const isLoggedIn = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState(cats);

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
          <PrivateRoute exact path={"/addProduct"}>
            <AddProduct setProducts={setProducts} />
          </PrivateRoute>
          <PrivateRoute path={"/editProduct/:id"}>
            <EditProductForm setProducts={setProducts} />
          </PrivateRoute>
          <Route exact path="/user">
            <User />
          </Route>
          <Route path="/user/:id">
            <ForeignUser />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
