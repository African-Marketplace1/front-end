import logo from "./logo.svg";
import "./App.css";
import Categories from "./components/Categories";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import Products from "./components/Products";
import cats from "./DummyData";



function App() {

  return (
    <div className="App">
      <Switch>
        
        <Route path={"/categories/:id"}>
          <Products cats={cats}/>
        </Route>
        <Route path={"/categories"} >
          <Categories cats={cats} />
        </Route>
        <Route exact path={"/"}>
          <h1>Hi</h1>
          <Link to="/categories">Click me</Link>
        </Route>

      </Switch>
    </div>
  );
} 

export default App;
