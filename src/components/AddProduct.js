import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import { setCurrentUserProducts } from "../actions";
import CategorySelectEdit from "./CategorySelectEdit";
import CircularProgress from "@mui/material/CircularProgress";

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
  price_usd: "",
  description: "",
  img: "",
};

const AddProduct = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(intialFormValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsFetching(true);
    axiosWithAuth()
      .post(
        `https://africanmarketplace-1.herokuapp.com/users/${props.currentUser.user_id}`,
        formValues
      )
      .then((res) => {
        setIsFetching(false);
        setCurrentUserProducts(res.data);
        push("/user");
      })
      .catch((err) => {
        setIsFetching(false);
        console.dir(err);
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="editForm py-5 container">
      <div className="col">
        <form
          onSubmit={handleSubmit}
          style={{ width: "30rem" }}
          className="m-auto"
        >
          <div className="modal-header d-flex justify-content-center">
            <h4 className="modal-title">Add Product</h4>
          </div>
          <div className="modal-body">
            <div className="form-group mb-3">
              <label>Product Name</label>
              <input
                value={formValues.name}
                onChange={handleChange}
                name="name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-group" style={{ width: "48%" }}>
                <label style={{ marginBottom: "5px" }}>Category</label>
                <CategorySelectEdit
                  onChange={handleChange}
                  category={formValues.category}
                />
              </div>
              <div className="form-group" style={{ width: "48%" }}>
                <label>Price (USD)</label>
                <input
                  value={formValues.price_usd}
                  onChange={handleChange}
                  name="price_usd"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Image URL</label>
              <input
                value={formValues.img}
                onChange={handleChange}
                name="img"
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={formValues.description}
                onChange={handleChange}
                name="description"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <Link to={`/user`}>
              <input type="button" className="btn btn-default" value="Cancel" />
            </Link>
            <input
              type="submit"
              className="btn btn-primary me-2"
              value="Submit"
            />
          </div>
        </form>
      </div>
      {isFetching && <CircularProgress />}
    </div>
    // <div>
    //   <form onSubmit={onSubmit}>
    //     <TextField
    //       id="outlined-basic"
    //       name="name"
    //       label="name"
    //       variant="outlined"
    //       value={formValues.name}
    //       onChange={onChange}
    //     />
    //     <CategorySelect onChange={onChange} />
    //     <TextField
    //       id="outlined-basic"
    //       name="price"
    //       label="price"
    //       variant="outlined"
    //       value={formValues.price}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="outlined-basic"
    //       name="description"
    //       label="description"
    //       variant="outlined"
    //       value={formValues.description}
    //       onChange={onChange}
    //     />
    //     <TextField
    //       id="outlined-basic"
    //       name="image_url"
    //       label="Image URL"
    //       variant="outlined"
    //       value={formValues.image_url}
    //       onChange={onChange}
    //     />

    //     <div>
    //       <Link to="/user">
    //         <Button variant="contained" color="secondary">
    //           Cancel
    //         </Button>
    //       </Link>
    //       <Button variant="contained" color="primary" type="submit">
    //         Add Plant
    //       </Button>
    //     </div>
    //   </form>
    // </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { setCurrentUserProducts })(AddProduct);
