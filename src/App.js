import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/Categories";
import { Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import Products from "./components/Products";
import cats from "./DummyData";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/UserProfile/User";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  const [products, setProducts] = useState(cats);

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Homepage cats={cats} />
          </Route>
          <Route path={"/categories/:id"}>
            <Products cats={cats} />
          </Route>
          <Route path={"/categories"}>
            <Categories cats={cats} />
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
          <Route path={"/editProduct/:id"}>
            <EditProduct />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
