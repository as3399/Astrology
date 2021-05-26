import React from "react";
import "./LoginPage.css";
import "../AdminDashboard/Imports";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  let history = useHistory();
  let location = useLocation();
  const [exlogin, setExlogin] = useState(true);
  const [fieldErr, setFieldErr] = useState();
  const [show, setShow] = useState({
    alert: false,
    registered: false,
    loginErr: false,
    fieldErr: fieldErr,
  });
  const [Msg, setMsg] = useState("");
  let reloadCount = Number(sessionStorage.getItem("reloadcount")) || 0;
  useEffect(() => {
    reload();
  }, []);

  function reload() {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadcount", JSON.stringify(reloadCount + 1));
      window.location.reload();
    }
  }

  return (
    <>
      <section class="sign-in-page">
        <div class="container p-0" id="sign-in-page-box">
          <div class="bg-white form-container sign-in-container">
            <div class="sign-in-page-data">
              <div class="sign-in-from w-100 m-auto">
                <h1 class="mb-3 text-center d-block">
                  Sign In<small class="font-size-16 text-danger">Admin</small>
                </h1>
                <p class="text-center text-dark">
                  Enter your email address and password to access Admin panel.
                </p>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string()
                      .email("Invalid Email Address")
                      .required("Email Required"),
                    password: Yup.string()
                      .min(6, "Password must of 6 characters")
                      .required("Password Required"),
                  })}
                  onSubmit={async (values) => {
                    console.log(values);
                    await axios
                      .post("http://localhost:5000/api/logIn", {
                        email: values.email,
                        password: values.password,
                      })
                      .then((response) => {
                        console.log(response);
                        if (
                          response.data.message ==
                          "Welcome to the admin dashboard"
                        ) {
                          history.push("/AdminPanel");
                        }
                        if (
                          response.data.message ==
                          "Welcome to the user dashboard"
                        ) {
                          history.push("/UserDashboard");
                        }
                      })
                      .catch((error) => {
                        setMsg(error.response.data.message, "error");
                        if (error.response.status >= 400) {
                          setShow({
                            registered: false,
                            alert: false,
                            loginErr: true,
                            fieldErr: fieldErr,
                          });
                          setMsg(error.response.data.message, "error");
                          if (
                            error.response.data.message ==
                            "User not found, Please enter valid detail"
                          ) {
                            setFieldErr(0);
                          }
                          if (
                            error.response.data.message ==
                            "Password is not correct, Please verify your password"
                          ) {
                            setFieldErr(1);
                          }
                        }
                      });
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    isSubmitting,
                    handleSubmit,
                  }) => {
                    return (
                      <>
                        {show.loginErr ? (
                          <div class="alert alert-danger" role="alert">
                            <div class="iq-alert-icon">
                              <i class="ri-information-line"></i>
                            </div>
                            <div class="iq-alert-text">{Msg}</div>
                          </div>
                        ) : null}
                        <form class="mt-4" onSubmit={handleSubmit}>
                          <div class="form-group">
                            <label for="exampleInputEmail2">
                              Email address
                            </label>
                            <input
                              name="email"
                              id="exampleInputEmail2"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder="Enter email"
                              className={
                                (touched.email && errors.email) || fieldErr == 0
                                  ? "form-control mb-0 invalid is-invalid"
                                  : "form-control mb-0"
                              }
                            />
                            {errors.email && touched.email && (
                              <p class="invalid-feedback">{errors.email}</p>
                            )}
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword2">Password</label>
                            <Link to="/forgetPswd">
                              <a href="#" class="float-right">
                                Forgot password?
                              </a>
                            </Link>
                            <input
                              type="password"
                              name="password"
                              className={
                                (touched.password && errors.password) ||
                                fieldErr == 1
                                  ? "form-control mb-0 invalid is-invalid"
                                  : "form-control mb-0"
                              }
                              id="exampleInputPassword2"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              placeholder="Password"
                            />
                            {errors.password && touched.password && (
                              <p class="invalid-feedback">{errors.password}</p>
                            )}
                          </div>
                          <div class="d-inline-block w-100">
                            <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customCheck2"
                              />
                              <label
                                class="custom-control-label"
                                for="customCheck1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div class="sign-info">
                            <button type="submit" class="btn btn-primary mb-2">
                              Sign in
                            </button>
                            <span class="text-dark dark-color d-block line-height-2">
                              Don't have an account? <a href="#">Sign up</a>
                            </span>
                          </div>
                        </form>
                        <br></br>
                        <p class="text-center text-dark">or</p>
                        <p class="text-center text-dark">
                         <a onClick={()=>{history.push("/signup"); sessionStorage.clear()}} href="#">SignIn as an User</a>
                        </p>
                      </>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1 class="text-danger text-uppercase">Astrology</h1>
                <a class="sign-in-logo mb-5" href="#"></a>
                <p>
                  To Keep connected with us please login with your personal info
                </p>
                <button class="btn iq-border-primary mt-2" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1 class="text-danger text-uppercase">Astrology</h1>
                <a class="sign-in-logo mb-5" href="#"></a>
                <p>Enter your personal details and start journey with us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
