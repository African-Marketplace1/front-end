import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { toggleIsFetching, setCurrentUser } from "../actions";
import { Button } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";

const Login = (props) => {
  const [badCredMessage, setBadCredMessage] = useState("");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    setBadCredMessage("");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.toggleIsFetching(true);
    axiosWithAuth()
      .post("https://africanmarketplace-1.herokuapp.com/users/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        console.log(res.data);
        push("/");
        props.setCurrentUser(res.data.user);
        props.toggleIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        setBadCredMessage(err.response.data.message);
        props.toggleIsFetching(false);
      });
  };

  return (
    <div>
      <div className="login-form py-5">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            className="m-auto"
            style={{ width: "30rem" }}
          >
            <h1 className="text-start">Login</h1>
            <label
              htmlFor="username"
              className="d-flex flex-column justify-content-center align-items-start mb-2"
            >
              Username:{" "}
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </label>

            <label
              htmlFor="password"
              className="d-flex flex-column justify-content-center align-items-start mb-2"
            >
              Password:{" "}
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </label>
            <div className="d-flex justify-content-end">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      </div>
      {props.isFetching && (
        <div>
          <CircularProgress />
        </div>
      )}
      {badCredMessage && (
        <div>
          <p style={{ color: "red" }}>{badCredMessage}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { toggleIsFetching, setCurrentUser })(
  Login
);
