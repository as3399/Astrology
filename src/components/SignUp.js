// import "../AdminDashboard/AdminPanel.css";
import "./LoginPage.css";
import "../AdminDashboard/Imports";
// import "./SignUp.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { error } from "jquery";

export default function SignUpPage(props) {
  let history = useHistory();
  let location = useLocation();
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
            <div class="bg-white form-container sign-up-container">
              <div class="sign-in-page-data">
                <div class="sign-in-from w-100 m-auto">
                  <h1 class="mb-3 text-center">Sign Up</h1>
                  <p class="text-center text-dark">
                    Enter your personal details and start journey with us.
                  </p>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      customCheck1: false,
                    }}
                    validationSchema={Yup.object().shape({
                      firstName: Yup.string()
                        .max(20, "Max 20 characters are allowed")
                        .required("Enter First Name"),
                      lastName: Yup.string()
                        .max(20, "Max 20 characters are allowed")
                        .required("Enter Last Name"),
                      email: Yup.string()
                        .email("Invalid Email Address")
                        .required("Email Required"),
                      password: Yup.string()
                        .min(6, "Password must of 6 characters")
                        .required("Password Required"),
                      customCheck1: Yup.bool().oneOf(
                        [true],
                        "You must accept the terms and conditions"
                      ),
                    })}
                    onSubmit={async (values, { resetForm }) => {
                      await axios
                        .post("http://localhost:5000/api/register", {
                          firstName: values.firstName,
                          lastName: values.lastName,
                          email: values.email,
                          password: values.password,
                        })
                        .then((response) => {
                          console.log("response: ", response);
                          setFieldErr(-1);
                          setShow({
                            alert: false,
                            registered: true,
                            loginErr: false,
                            fieldErr: fieldErr,
                          });
                          resetForm();
                        })
                        .catch((error) => {
                          setMsg(error.response.data.message);
                          if (error.response.status >= 400) {
                            setShow({
                              alert: true,
                              registered: false,
                              loginErr: false,
                              fieldErr: fieldErr,
                            });
                          }
                          if (
                            error.response.data.message ==
                            "This Email is already exists"
                          ) {
                            setFieldErr(3);
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
                          {show.registered ? (
                            <div class="alert alert-success" role="alert">
                              <div class="iq-alert-icon">
                                <i class="las la-check-circle"></i>
                              </div>
                              <div class="iq-alert-text">
                                Thanks for Registering
                              </div>
                            </div>
                          ) : null}
                          {show.alert ? (
                            <div class="alert alert-danger" role="alert">
                              <div class="iq-alert-icon">
                                <i class="ri-information-line"></i>
                              </div>
                              <div class="iq-alert-text">{Msg}</div>
                            </div>
                          ) : null}
                          <form
                            class="mt-4 text-align-left"
                            onSubmit={handleSubmit}
                          >
                            <div class="d-flex space ">
                              <div class="form-group d-lg-inline">
                                <label for="exampleInputFirstName1">
                                  Your First Name
                                </label>
                                <input
                                  name="firstName"
                                  id="exampleInputFirstName1"
                                  onBlur={handleBlur}
                                  value={values.firstName}
                                  onChange={handleChange}
                                  placeholder="Your First Name"
                                  // style={{width: "50%", margin:"0"}}
                                  className={
                                    touched.firstName && errors.firstName
                                      ? "form-control mb-0 invalid is-invalid"
                                      : "form-control mb-0"
                                  }
                                />
                                {errors.firstName && touched.firstName && (
                                  <p class="invalid-feedback">
                                    {errors.firstName}
                                  </p>
                                )}
                              </div>
                              <div
                                class="form-group d-lg-inline"
                                style={{ marginLeft: "60px" }}
                              >
                                <label for="exampleInputLastName">
                                  Your Last Name
                                </label>
                                <input
                                  name="lastName"
                                  className={
                                    touched.lastName && errors.lastName
                                      ? "form-control mb-0 invalid is-invalid"
                                      : "form-control mb-0"
                                  }
                                  id="exampleInputLastName"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.LastName}
                                  placeholder="Your Last Name"
                                />
                                {errors.lastName && touched.lastName && (
                                  <p class="invalid-feedback">
                                    {errors.lastName}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1" id="email">
                                Email address
                              </label>
                              <input
                                name="email"
                                className={
                                  (touched.email && errors.email) ||
                                  fieldErr == 3
                                    ? "form-control mb-0 invalid is-invalid"
                                    : "form-control mb-0"
                                }
                                id="exampleInputEmail1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Enter email"
                                value={values.email}
                              />
                              {errors.email && touched.email && (
                                <p class="invalid-feedback">{errors.email}</p>
                              )}
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">
                                Password
                              </label>
                              <input
                                name="password"
                                type="password"
                                value={values.password}
                                className={
                                  touched.password && errors.password
                                    ? "form-control mb-0 invalid is-invalid"
                                    : "form-control mb-0"
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                                id="exampleInputPassword1"
                                placeholder="Password"
                              />
                              {errors.password && touched.password && (
                                <p class="invalid-feedback">
                                  {errors.password}
                                </p>
                              )}
                            </div>
                            <div class="d-inline-block w-100">
                              <div class="custom-control-inline custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                <input
                                  type="checkbox"
                                  class={
                                    !(
                                      errors.customCheck1 &&
                                      touched.customCheck1
                                    )
                                      ? "custom-control-input"
                                      : "custom-control-input is-invalid"
                                  }
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  id="customCheck1"
                                  value={values.customCheck1}
                                  name="customCheck1"
                                />
                                <label
                                  class="custom-control-label"
                                  for="customCheck1"
                                >
                                  I accept{" "}
                                  <a class="" href="#">
                                    Terms and Conditions
                                  </a>
                                </label>
                                {errors.customCheck1 && touched.customCheck1 ? (
                                  <p class="invalid-feedback">
                                    {errors.customCheck1}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div class="sign-info">
                              <button
                                type="submit"
                                class="btn btn-primary mb-2"
                              >
                                Sign Up
                              </button>
                              <span class="text-dark d-block line-height-2">
                                Already Have Account ? <a href="#">Log In</a>
                              </span>
                            </div>
                          </form>
                        </>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
            <div class="bg-white form-container sign-in-container">
              <div class="sign-in-page-data">
                <div class="sign-in-from w-100 m-auto">
                  <h1 class="mb-3 text-center">Sign in</h1>
                  <p class="text-center text-dark">
                    Enter your email address and password to access User panel.
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
                                  (touched.email && errors.email) ||
                                  fieldErr == 0
                                    ? "form-control mb-0 invalid is-invalid"
                                    : "form-control mb-0"
                                }
                              />
                              {errors.email && touched.email && (
                                <p class="invalid-feedback">{errors.email}</p>
                              )}
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword2">
                                Password
                              </label>
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
                                <p class="invalid-feedback">
                                  {errors.password}
                                </p>
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
                              <button
                                type="submit"
                                class="btn btn-primary mb-2"
                              >
                                Sign in
                              </button>
                              <span class="text-dark dark-color d-block line-height-2">
                                Don't have an account? <a href="#">Sign up</a>
                              </span>
                            </div>
                          </form>
                          <br></br>
                          <p class="text-center text-dark">
                            or
                          </p>
                          <p class="text-center text-dark">
                        <Link to="/AdminSignin"><a href="#"> SignIn as an Administrator </a>
                        </Link>
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
                    To Keep connected with us please login with your personal
                    info
                  </p>
                  <button class="btn iq-border-primary mt-2" id="signIn">
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1 class="text-danger text-uppercase">Astrology</h1>
                  <a class="sign-in-logo mb-5" href="#"></a>
                  <p>Enter your personal details and start journey with us</p>
                  <button class="btn iq-border-primary mt-2" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          </section> 
        {/* </section> 
        :
        <section class="sign-in-page">
          <div class="container p-0" id="sign-in-page-box">
            <div class="bg-white form-container sign-in-container">
              <div class="sign-in-page-data">
                <div class="sign-in-from w-100 m-auto">
                  <h1 class="mb-3 text-center d-block">Sign In<small class="font-size-16 text-danger">Admin</small></h1>
                  <p class="text-center text-dark">
                    Enter your email address and password to access User panel.
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
                                  (touched.email && errors.email) ||
                                  fieldErr == 0
                                    ? "form-control mb-0 invalid is-invalid"
                                    : "form-control mb-0"
                                }
                              />
                              {errors.email && touched.email && (
                                <p class="invalid-feedback">{errors.email}</p>
                              )}
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword2">
                                Password
                              </label>
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
                                <p class="invalid-feedback">
                                  {errors.password}
                                </p>
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
                              <button
                                type="submit"
                                class="btn btn-primary mb-2"
                              >
                                Sign in
                              </button>
                              <span class="text-dark dark-color d-block line-height-2">
                                Don't have an account? <a href="#">Sign up</a>
                              </span>
                            </div>
                          </form>
                          <br></br>
                          <p class="text-center text-dark">
                            or
                          </p>
                          <p class="text-center text-dark">
                           <Link to="/AdminPanel/Signup"><a href="#"> SignIn as an User </a></Link>
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
                    To Keep connected with us please login with your personal
                    info
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
        </section> */}
    </>
  );
}
