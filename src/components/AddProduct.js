import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { setCurrentUserProducts } from "../actions";
import CategorySelect from "./CategorySelect";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const intialFormValues = {
  name: "",
  category: "",
  price: "",
  description: "",
  image_url: "",
};

const AddProduct = (props) => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(intialFormValues);

  const onChange = (evt) => {
    console.log(evt.target.value);
    console.log(evt.target.name);
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const onSubmit = (evt) => {
    console.log("submit");
    evt.preventDefault();

    const newPlant = {
      name: formValues.name,
      category: formValues.category,
      price_usd: formValues.price,
      description: formValues.description,
      img: formValues.image_url,
    };
    console.log(newPlant);

    axiosWithAuth()
      .post(
        `https://africanmarketplace-1.herokuapp.com/users/${props.currentUser.user_id}`,
        newPlant
      )
      .then((res) => {
        setCurrentUserProducts(res.data);
        push("/user");
      })
      .catch((err) => {
        console.dir(err);
        console.log(err.response.data.message);
      });
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          name="name"
          label="name"
          variant="outlined"
          value={formValues.name}
          onChange={onChange}
        />
        <CategorySelect onChange={onChange} />
        <TextField
          id="outlined-basic"
          name="price"
          label="price"
          variant="outlined"
          value={formValues.price}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          name="description"
          label="description"
          variant="outlined"
          value={formValues.description}
          onChange={onChange}
        />
        <TextField
          id="outlined-basic"
          name="image_url"
          label="Image URL"
          variant="outlined"
          value={formValues.image_url}
          onChange={onChange}
        />

        <div>
          <Button variant="contained" color="secondary" type="submit">
            Add Plant
          </Button>
          <Link to="/user">
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { setCurrentUserProducts })(AddProduct);
