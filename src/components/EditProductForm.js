import React, { useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CategorySelectEdit from "./CategorySelectEdit";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentUserProducts } from "../actions";
import CircularProgress from "@mui/material/CircularProgress";

const EditProductForm = (props) => {
  const location = useLocation();
  const { push } = useHistory();
  const { id } = useParams();

  const intialFormValues = {
    name: location.state.name,
    category: location.state.category,
    price_usd: location.state.price,
    description: location.state.description,
    img: location.state.image_url,
  };
  const [formValues, setFormValues] = useState(intialFormValues);
  const [isFetching, setIsFetching] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFetching(true);
    axios
      .put(
        `https://africanmarketplace-1.herokuapp.com/products/${id}`,
        formValues
      )
      .then((res) => {
        setIsFetching(false);
        props.setCurrentUserProducts(res.data);
        push(`/user`);
      })
      .catch((err) => {
        setIsFetching(false);
        console.dir(err);
      });
  };

  return (
    <div className="col">
      <div className="modal-content">
        <form
          onSubmit={handleSubmit}
          style={{ width: "30rem" }}
          className="m-auto"
        >
          <div className="modal-header">
            <h4 className="modal-title">
              Editing: <strong>{formValues.name}</strong>
            </h4>
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
            <input
              type="submit"
              className="btn btn-primary me-2"
              value="Submit Changes"
            />
            <Link to={`/user`}>
              <input type="button" className="btn btn-default" value="Cancel" />
            </Link>
          </div>
        </form>
      </div>
      {isFetching && <CircularProgress />}
    </div>
  );
};
export default connect(null, { setCurrentUserProducts })(EditProductForm);
