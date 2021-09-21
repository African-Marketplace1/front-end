
import Login from './components/Login'
import "./App.css";
import Categories from "./components/Categories";
import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import Products from "./components/Products";
import cats from "./DummyData";
import Register from './components/Register';
import AddProduct from './components/AddProduct';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/users/login" component = {Login}/>
        <Route exact path= " /users/register" component={Register}/>
        <Route exact path= "/addProduct" component= {AddProduct}/>
        
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
