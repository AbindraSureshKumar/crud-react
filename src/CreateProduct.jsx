import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      price: "",
      color: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") errors.name = "please enter user name";
      if (values.company === "") errors.company = "please enter company name";
      if (values.price === "") errors.price = "please enter price";
      if (values.color === "") errors.color = "please enter color";
      return errors;
    },
    onSubmit: async (values) => {
      let product = await axios.post(
        "https://6290209e665ea71fe12da309.mockapi.io/product",
        values
      );
      alert("product created");
      navigate("/products");
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Product Name</label>
              <input
                className={`form-control ${
                  formik.errors.name ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Company Name</label>
              <input
                className={`form-control ${
                  formik.errors.company ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.company}
                onChange={formik.handleChange}
                name="company"
              />
              <span style={{ color: "red" }}>{formik.errors.company}</span>
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                className={`form-control ${
                  formik.errors.price ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.price}
                onChange={formik.handleChange}
                name="price"
              />
              <span style={{ color: "red" }}>{formik.errors.price}</span>
            </div>
            <div className="col-lg-6">
              <label>Color</label>
              <input
                className={`form-control ${
                  formik.errors.color ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.color}
                onChange={formik.handleChange}
                name="color"
              />
              <span style={{ color: "red" }}>{formik.errors.color}</span>
            </div>
            <div className="col-lg-6">
              <input
                className="btn btn-primary mt-2"
                type={"submit"}
                value="Submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;
