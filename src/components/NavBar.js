import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar } from "@mui/material";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions";

const NavBar = (props) => {
  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("token");
  };

  const handleUser = () => {
    console.log("hi");
  };
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
              <div className="other-buttons d-flex">
                <Button component={Link} color="inherit" to={"/categories"}>
                  Categories
                </Button>
                {!props.currentUser ? (
                  <div>
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
                ) : (
                  <div className="d-flex">
                    <Button color="inherit" onClick={handleLogout}>
                      Logout
                    </Button>
                    <Link to="/user">
                      <div
                        style={{ width: "35px", height: "35px" }}
                        className="img-fluid"
                        onClick={handleUser}
                      >
                        <img
                          src={
                            props.currentUser.img ||
                            "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
                          }
                          className="img-fluid rounded-circle"
                          alt="user logo"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </AppBar>
        </nav>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(NavBar);
