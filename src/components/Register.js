import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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
};
function Register() {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    };
    axios
      .post(
        "https://africanmarketplace-1.herokuapp.com/users/register ",
        newUser
      )
      .then((res) => {
        console.log(res);
      });
  };
  const classes = useStyles();

  return (
    <div>
      {/* create registration input forms */}
      <div>JOIN US</div>
      <form onSubmit={handleSubmit}>
        <TextField
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
        />
        <Button variant="contained" color="secondary" type="submit">
          Sign Up!
        </Button>
      </form>
    </div>
  );
}
export default Register;
