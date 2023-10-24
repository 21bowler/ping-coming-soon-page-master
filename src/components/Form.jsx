import React, { useState } from "react";
import classes from "./Form.module.css";
import * as yup from "yup";
import { useFormik } from "formik";
import illustrationImg from "../assets/illustration-dashboard.png";

const onSubmit = function () {
  console.log("Submitted");
};

const Form = () => {
  //* schema for the validation of the form
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email address")
      .required("Required"),
  });

  //*Formik function
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  console.log(formik.errors);

  const submitHandler = (data) => {
    console.log(data);
  };

  console.log(formik);

  return (
    <div>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Your email address ..."
          style={{
            borderColor:
              formik.errors.email && formik.touched.email ? "#ff5263" : "",
          }}
        />

        {formik.errors.email && formik.touched.email && (
          <label>Please provide a valid email address</label>
        )}
        <button type="submit">Notify Me</button>
      </form>
      <div>
        <img src={illustrationImg} alt="illus" />
      </div>
    </div>
  );
};

export default Form;
