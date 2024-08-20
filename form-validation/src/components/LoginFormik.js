import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function LoginFormik() {

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <>
      <h2>Login</h2>

    <Formik  validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter email here.."
          id="email"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password here.."
          id="password"
        />

        <button type="submit" className="btn">
          Login
        </button>
      </form>
      </Formik>
    </>
  );
}

export default LoginFormik;
