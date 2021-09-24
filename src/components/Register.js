import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LocationRegisterBar from "./LocationRegisterBar";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { toggleIsFetching } from "../actions";
import CircularProgress from "@mui/material/CircularProgress";
import worldIsMine from "../assets/worldIsMine.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  location: "",
};
function Register(props) {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    props.toggleIsFetching(true);
    // const newUser = {
    //   username: formValues.username,
    //   email: formValues.email,
    //   password: formValues.password,
    // };
    axios
      .post(
        "https://africanmarketplace-1.herokuapp.com/users/register ",
        formValues
      )
      .then((res) => {
        console.log(res);
        props.toggleIsFetching(false);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
        props.toggleIsFetching(false);
      });
  };

  return (
    <div className="registerForm py-5">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={handleSubmit}
            className="m-auto"
            style={{ width: "30rem" }}
          >
            <h2 className="text-start">Register</h2>

            <div className="d-flex justify-content-between mb-2">
              <label
                className="d-flex flex-column justify-content-center align-items-start"
                style={{ width: "49%" }}
              >
                Username:
                <input
                  style={{ width: "100%", height: "2.25rem" }}
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </label>
              <label
                className="d-flex flex-column justify-content-center align-items-start"
                style={{ width: "49%" }}
              >
                Password:
                <input
                  style={{ width: "100%", height: "2.25rem" }}
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label
              className="d-flex flex-column justify-content-center align-items-start mb-2"
              style={{ width: "100%" }}
            >
              Email:
              <input
                style={{ width: "100%", height: "2.25rem" }}
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </label>
            <label
              className="d-flex flex-column justify-content-center align-items-start mb-2"
              style={{ width: "100%" }}
            >
              Location:
              <LocationRegisterBar
                setFormValues={setFormValues}
                formValues={formValues}
              />
            </label>

            {/* <TextField
          id="outlined-basic"
          name="username"
          label="Username"
          variant="outlined"
          value={formValues.username}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="email"
          label="email"
          variant="outlined"
          value={formValues.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          value={formValues.password}
          onChange={handleChange}
        /> */}
            <div className="d-flex justify-content-end">
              <Button color="inherit" type="submit">
                Sign Up!
              </Button>
            </div>
          </form>
          <div className="imgWrap m-auto" style={{ width: "15rem" }}>
            <img
              src={worldIsMine}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              alt="the world is mine"
            />
          </div>
        </div>
        {props.isFetching && (
          <div>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { toggleIsFetching })(Register);
