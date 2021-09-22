import React from "react";
import { Link, Switch } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";

export default function NavBar() {
  return (
    <div className="nav-header">
      <header>
        <nav>
          <AppBar color="inherit" position="sticky">
            <div className="appbar-nav">
              <div className="home-button">
                <Button
                  edge="start"
                  className="home-nav"
                  color="inherit"
                  component={Link}
                  to={"/"}
                >
                  Home&nbsp;
                </Button>
              </div>
              <div className="other-buttons">
                {/* <Button component={Link} color="inherit" to={"/categories"}>
                  Categories
                </Button> */}
                <Button component={Link} color="inherit" to={"/login"}>
                  Login
                </Button>
                <Button
                  component={Link}
                  color="inherit"
                  size="large"
                  to={"/register"}
                >
                  Register
                </Button>
              </div>
            </div>
          </AppBar>
        </nav>
      </header>
    </div>
  );
}
