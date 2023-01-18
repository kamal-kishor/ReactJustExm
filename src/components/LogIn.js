import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import Sum from "./Sum";
// import { TextField } from "./TextField";

export default function LogIn() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              {/* <TextField label="First Name" name="name" type="text" /> */}
              <input
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {touched.name && errors.name ? (
                <p className="error">{errors.name}</p>
              ) : null}
            </div>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.email && touched.email ? (
                <p className="error">{errors.email}</p>
              ) : null}
            </div>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Password
              </label>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.password && touched.password ? (
                <p className="error">{errors.password}</p>
              ) : null}
            </div>
            <div className="my-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Confirm Password
              </label>
              <input
                // <TextField
                name="confirm_password"
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="error">{errors.confirm_password}</p>
              ) : null}
            </div>
            <div className="row my-3">
              <button className="btn btn-success" type="submit">
                Registration
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <Sum/>
        </div>
      </div>
    </div>
  );
}
