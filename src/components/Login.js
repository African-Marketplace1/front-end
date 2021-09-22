import { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { toggleIsFetching, setCurrentUser } from "../actions";
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
      <h1>Welcome to Water My Plants!</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name: </label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
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
